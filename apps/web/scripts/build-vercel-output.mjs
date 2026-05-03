#!/usr/bin/env node
/**
 * Converts the react-router build output (apps/web/build/) into
 * the Vercel Build Output API format (.vercel/output/).
 *
 * Run after `react-router build`:
 *   bun run build-vercel-output
 *
 * Or chained in the build script:
 *   "build": "react-router build && node scripts/build-vercel-output.mjs"
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(webRoot, '../..');
const vercelOut = path.resolve(repoRoot, '.vercel/output');
const clientBuild = path.resolve(webRoot, 'build/client');
const serverBuild = path.resolve(webRoot, 'build/server');

function cp(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function cpDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) cpDir(s, d);
    else cp(s, d);
  }
}

console.log('Building Vercel output...');

fs.rmSync(vercelOut, { recursive: true, force: true });
fs.mkdirSync(path.join(vercelOut, 'functions/index.func'), { recursive: true });
fs.mkdirSync(path.join(vercelOut, 'static'), { recursive: true });

fs.writeFileSync(
  path.join(vercelOut, 'config.json'),
  JSON.stringify({
    version: 3,
    routes: [
      {
        src: '^/assets/(.+)$',
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
        continue: true,
      },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' },
    ],
  }, null, 2)
);

fs.writeFileSync(
  path.join(vercelOut, 'functions/index.func/.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' }, null, 2)
);

const serverEntry = path.join(serverBuild, 'index.js');
const funcOut = path.join(vercelOut, 'functions/index.func/index.js');
console.log('Bundling server function...');
execSync(
  `bunx esbuild ${serverEntry} --bundle --platform=node --target=esnext --format=esm --external:argon2 --external:lightningcss --outfile=${funcOut}`,
  { stdio: 'inherit', cwd: webRoot }
);

cpDir(path.join(clientBuild, 'assets'), path.join(vercelOut, 'static/assets'));
cpDir(path.join(clientBuild, 'properties'), path.join(vercelOut, 'static/properties'));

const publicDir = path.join(webRoot, 'public');
if (fs.existsSync(publicDir)) {
  for (const entry of fs.readdirSync(publicDir, { withFileTypes: true })) {
    const s = path.join(publicDir, entry.name);
    const d = path.join(vercelOut, 'static', entry.name);
    if (entry.isDirectory()) cpDir(s, d);
    else cp(s, d);
  }
}

console.log('Vercel output ready at .vercel/output/');
