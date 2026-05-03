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

// Symlink apps/web/node_modules into the func dir so esbuild can resolve packages
// when bundling from FUNC_DIR. Removed after bundling.
const NM_LINK = join(FUNC_DIR, 'node_modules');
symlinkSync(join(WEB_DIR, 'node_modules'), NM_LINK, 'dir');

// Entry file written in FUNC_DIR.
// ./index.js is marked EXTERNAL → all server bundle chunks stay as separate files.
// esbuild only bundles @react-router/node + @mjackson/node-fetch-server (~200KB).
const ENTRY_SRC = join(FUNC_DIR, '_entry.mjs');
writeFileSync(
  ENTRY_SRC,
  `import { createRequestHandler } from "@react-router/node";
import * as build from "./index.js";

const handler = createRequestHandler(build, "production");

export default function (req, res) {
  return handler(req, res);
}
`
);

// Mark all asset .js files as external so esbuild does not re-bundle them
const assetDir = join(FUNC_DIR, 'assets');
let assetExternals = '';
if (existsSync(assetDir)) {
  const assetFiles = readdirSync(assetDir).filter(f => f.endsWith('.js'));
  assetExternals = assetFiles.map(f => `--external:./assets/${f}`).join(' ');
  console.log(`[vercel-output] Marking ${assetFiles.length} asset chunk(s) as external`);
}

console.log('[vercel-output] Bundling SSR function with esbuild (all chunks kept external)...');
execSync(
  [
    'bunx esbuild',
    ENTRY_SRC,
    '--bundle',
    '--platform=node',
    '--target=node22',
    '--format=esm',
    `--outfile=${join(FUNC_DIR, 'index.mjs')}`,
    '--external:./index.js',   // keep server entry external
    assetExternals,            // keep all asset chunks external
    '--external:fsevents',
    '--external:lightningcss',
    '--log-level=warning',
  ].join(' '),
  { cwd: FUNC_DIR, stdio: 'inherit' }
);

// Clean up temp files
rmSync(ENTRY_SRC);
rmSync(NM_LINK);

// Write .vc-config.json — tells Vercel runtime how to invoke the function
writeFileSync(
  join(FUNC_DIR, '.vc-config.json'),
  JSON.stringify(
    {
      runtime: 'nodejs22.x',
      handler: 'index.mjs',
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
