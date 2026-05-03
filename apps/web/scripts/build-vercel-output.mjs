#!/usr/bin/env node
import { build as esbuild } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(webRoot, '../..');
const vercelOut = path.resolve(repoRoot, '.vercel/output');
const clientBuild = path.resolve(webRoot, 'build/client');
const stubDir = path.join(__dirname, 'vercel-stubs');

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
      { src: '^/assets/(.+)$', headers: { 'cache-control': 'public, max-age=31536000, immutable' }, continue: true },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' },
    ],
  }, null, 2)
);

fs.writeFileSync(
  path.join(vercelOut, 'functions/index.func/.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' }, null, 2)
);

const vercelEntry = path.join(__dirname, 'vercel-entry.mjs');
const funcOut = path.join(vercelOut, 'functions/index.func/index.js');

// Stub for native/problematic modules
const stubs = {
  'argon2': path.join(stubDir, 'argon2.mjs'),
  'ws': path.join(stubDir, 'ws.mjs'),
  '@neondatabase/serverless': path.join(stubDir, 'neon.mjs'),
  '@react-router/dev/routes': path.join(stubDir, 'react-router-dev-routes.mjs'),
};

// The index-CbdE1pet.js path that server-build.js imports
const honoAppPath = path.resolve(webRoot, 'build/server/assets/index-CbdE1pet.js');
const honoAppStub = path.join(stubDir, 'hono-app.mjs');

console.log('Bundling server function...');
await esbuild({
  entryPoints: [vercelEntry],
  bundle: true,
  platform: 'node',
  target: 'esnext',
  format: 'esm',
  outfile: funcOut,
  banner: {
    js: `import{createRequire}from'module';import{fileURLToPath as __fup}from'url';import{dirname as __dn}from'path';const require=createRequire(import.meta.url);const __filename=__fup(import.meta.url);const __dirname=__dn(__filename);`
  },
  external: ['lightningcss'],
  plugins: [
    {
      name: 'stub-natives',
      setup(build) {
        // Stub known-problematic packages by name
        for (const [pkg, stubPath] of Object.entries(stubs)) {
          const filter = new RegExp(`^${pkg.replace(/[@/]/g, (c) => c === '@' ? '@' : '\\/')}$`);
          build.onResolve({ filter }, () => ({ path: stubPath }));
        }
        // Stub index-CbdE1pet.js by absolute path (imported as relative by server-build.js)
        build.onResolve({ filter: /index-CbdE1pet/ }, () => ({ path: honoAppStub }));
      },
    },
  ],
});

console.log(`Server function bundled to ${funcOut}`);

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
