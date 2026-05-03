#!/usr/bin/env node
/**
 * Creates the Vercel Build Output API v3 format from a React Router SSR build.
 *
 * Run after: VERCEL=1 bun run build (inside apps/web/)
 *
 * Strategy for the SSR function:
 *   - Copy server bundle files (index.js + assets/) into the function dir
 *   - Create a thin wrapper entry that imports @react-router/node + ./index.js
 *   - Run esbuild FROM the function dir (with a node_modules symlink to apps/web)
 *   - Mark ./index.js EXTERNAL so the 3.4MB server bundle is NOT re-bundled
 *   - Result: index.mjs is ~300KB instead of 4.5MB
 */

import {
  mkdirSync,
  cpSync,
  writeFileSync,
  rmSync,
  readdirSync,
  existsSync,
  symlinkSync,
} from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(import.meta.url), '../../');
const OUTPUT_DIR = join(ROOT, '.vercel/output');
const WEB_DIR = join(ROOT, 'apps/web');
const BUILD_DIR = join(WEB_DIR, 'build');
const PUBLIC_DIR = join(WEB_DIR, 'public');

const SERVER_BUNDLE_DIR = join(BUILD_DIR, 'server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0');

console.log('[vercel-output] Cleaning old output...');
rmSync(OUTPUT_DIR, { recursive: true, force: true });
mkdirSync(join(OUTPUT_DIR, 'static'), { recursive: true });

// ─── 1. Static assets ────────────────────────────────────────────────────────

console.log('[vercel-output] Copying client build → static/');
cpSync(join(BUILD_DIR, 'client'), join(OUTPUT_DIR, 'static'), { recursive: true });

console.log('[vercel-output] Copying public/ → static/ (no overwrite)');
if (existsSync(PUBLIC_DIR)) {
  for (const item of readdirSync(PUBLIC_DIR)) {
    const src = join(PUBLIC_DIR, item);
    const dest = join(OUTPUT_DIR, 'static', item);
    cpSync(src, dest, { recursive: true, force: false, errorOnExist: false });
  }
}

// ─── 2. Serverless function ───────────────────────────────────────────────────

const FUNC_DIR = join(OUTPUT_DIR, 'functions/index.func');
mkdirSync(FUNC_DIR, { recursive: true });

// Copy server bundle (index.js + assets/) so relative imports resolve at runtime
console.log('[vercel-output] Copying server bundle files...');
cpSync(SERVER_BUNDLE_DIR, FUNC_DIR, { recursive: true });

// Symlink apps/web/node_modules so esbuild can resolve packages from FUNC_DIR.
const NM_LINK = join(FUNC_DIR, 'node_modules');
symlinkSync(join(WEB_DIR, 'node_modules'), NM_LINK, 'dir');

// Entry: bundle EVERYTHING into one self-contained index.mjs.
// No externals for local files — this avoids the circular dependency where
// @react-router/node needs react-router which lives in a vendor chunk.
// The resulting file is larger but guaranteed to work at runtime.
// Use CommonJS output — Vercel's launcherType:Nodejs loads the handler via require(),
// which cannot load ESM .mjs files. CJS is the safe, compatible choice.
const ENTRY_SRC = join(FUNC_DIR, '_entry.cjs');
writeFileSync(
  ENTRY_SRC,
  `const { createRequestListener } = require("@react-router/node");
// _src_index.js is the renamed server entry (renamed to avoid output name collision)
const build = require("./_src_index.js");

// createRequestListener returns a Node.js http.RequestListener (req, res) => void
module.exports = createRequestListener({ build, mode: "production" });
`
);

// Rename the server entry so esbuild output can safely use 'index.js'
const { renameSync } = await import('fs');
renameSync(join(FUNC_DIR, 'index.js'), join(FUNC_DIR, '_src_index.js'));

console.log('[vercel-output] Bundling SSR function with esbuild (CJS, fully self-contained)...');
execSync(
  [
    'bunx esbuild',
    ENTRY_SRC,
    '--bundle',
    '--platform=node',
    '--target=node22',
    '--format=cjs',
    `--outfile=${join(FUNC_DIR, 'index.js')}`,
    '--external:fsevents',
    '--external:lightningcss',
    '--log-level=warning',
  ].join(' '),
  { cwd: FUNC_DIR, stdio: 'inherit' }
);

// Clean up temp files
rmSync(ENTRY_SRC);
rmSync(NM_LINK);
rmSync(join(FUNC_DIR, '_src_index.js'));

// Remove the now-inlined asset JS chunks from the function dir
const assetDir = join(FUNC_DIR, 'assets');
if (existsSync(assetDir)) {
  const jsChunks = readdirSync(assetDir).filter(f => f.endsWith('.js'));
  for (const chunk of jsChunks) rmSync(join(assetDir, chunk));
  console.log(`[vercel-output] Removed ${jsChunks.length} inlined JS chunk(s) from assets/`);
}

// Write .vc-config.json — tells Vercel runtime how to invoke the function
writeFileSync(
  join(FUNC_DIR, '.vc-config.json'),
  JSON.stringify(
    {
      runtime: 'nodejs22.x',
      handler: 'index.js',
      launcherType: 'Nodejs',
    },
    null,
    2
  )
);

console.log('[vercel-output] Writing config.json...');

// ─── 3. Routing config ────────────────────────────────────────────────────────

const config = {
  version: 3,
  routes: [
    // Immutable cache for hashed Vite assets
    {
      src: '^/assets/(.+)$',
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      continue: true,
    },
    // Serve static files from CDN when they exist
    { handle: 'filesystem' },
    // Everything else → SSR function
    { src: '/(.*)', dest: '/index' },
  ],
};

writeFileSync(join(OUTPUT_DIR, 'config.json'), JSON.stringify(config, null, 2));

console.log('[vercel-output] ✅ Done. Output at .vercel/output/');
