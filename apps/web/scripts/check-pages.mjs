#!/usr/bin/env node
/**
 * Smoke-check the running app in a real headless browser.
 *
 * For each route under check it asserts:
 *   1. No "hydration mismatch" / "Expected server HTML" / unhandled exception
 *      messages appear in the browser console or as page errors.
 *   2. The dark-navy site background (#0A1929) is actually applied to
 *      <html>/<body> on the home page (the regression that motivated this
 *      script slipped through unnoticed because nothing asserted on styling).
 *
 * The script can either:
 *   - reuse a dev server you already have running (set CHECK_BASE_URL), or
 *   - spawn its own `bun run dev` child process on a dedicated port.
 *
 * Exits non-zero on the first failure so CI / pre-commit can rely on it.
 *
 * Usage:
 *   bun run check:pages           # spawns its own dev server on port 5051
 *   CHECK_BASE_URL=http://localhost:5000 bun run check:pages
 */

import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const webRoot = resolve(__dirname, '..');

// Make sure Playwright finds the chromium binary that lives inside apps/web.
// (We install it there to keep it scoped to this package.)
if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  const localBrowsers = resolve(webRoot, '.playwright-browsers');
  if (existsSync(localBrowsers)) {
    process.env.PLAYWRIGHT_BROWSERS_PATH = localBrowsers;
  }
}

const { chromium } = await import('playwright');

const PORT = Number(process.env.CHECK_PORT ?? 5051);
const BASE_URL = process.env.CHECK_BASE_URL ?? `http://localhost:${PORT}`;
const SHOULD_SPAWN_SERVER = !process.env.CHECK_BASE_URL;
const READY_TIMEOUT_MS = 90_000;
const PAGE_TIMEOUT_MS = 45_000;

// Targets we hit. `expectNavyBackground` is only true for the home page,
// because the dark-navy `html { background: #0A1929 }` is a styled-jsx
// global declared inside src/app/page.jsx.
const ROUTES = [
  { path: '/', expectNavyBackground: true },
  // Any unknown path resolves to the catch-all not-found route, so this
  // exercises the root layout for a non-home render path.
  { path: '/__check_pages__/probe', expectNavyBackground: false },
];

// Console / page-error fragments that indicate a real regression.
const HYDRATION_ERROR_PATTERNS = [
  /hydration failed/i,
  /expected server html/i,
  /text content does(?: not| n't) match/i,
  /server rendered html didn't match the client/i,
  // Production-mode minified hydration error codes
  /minified react error #(418|419|421|422|423|425)/i,
];

const NAVY_HEX = '#0A1929';
const NAVY_RGB = { r: 0x0a, g: 0x19, b: 0x29 };

function log(...args) {
  // eslint-disable-next-line no-console
  console.log('[check-pages]', ...args);
}

function logError(...args) {
  // eslint-disable-next-line no-console
  console.error('[check-pages] ERROR:', ...args);
}

async function waitForServer(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let lastErr;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: 'GET' });
      // Anything non-5xx means the server is responding.
      if (res.status < 500) return;
      lastErr = new Error(`status ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(
    `Dev server at ${url} did not become ready within ${timeoutMs}ms` +
      (lastErr ? `: ${lastErr.message}` : ''),
  );
}

function spawnDevServer() {
  log(`spawning dev server on port ${PORT}`);
  const child = spawn('bun', ['run', 'dev', '--port', String(PORT)], {
    cwd: webRoot,
    env: { ...process.env, NODE_ENV: process.env.NODE_ENV ?? 'development' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stdout.on('data', (b) => process.stdout.write(`[dev] ${b}`));
  child.stderr.on('data', (b) => process.stderr.write(`[dev] ${b}`));
  child.on('exit', (code, signal) => {
    log(`dev server exited (code=${code} signal=${signal})`);
  });
  return child;
}

function parseRgb(str) {
  // e.g. "rgb(10, 25, 41)" or "rgba(10, 25, 41, 1)"
  const m = str?.match(/rgba?\(([^)]+)\)/i);
  if (!m) return null;
  const parts = m[1].split(',').map((p) => parseFloat(p.trim()));
  if (parts.length < 3) return null;
  const [r, g, b, a = 1] = parts;
  return { r, g, b, a };
}

function isNavy(rgb) {
  if (!rgb) return false;
  // Allow ±2 of slack per channel to absorb sub-pixel rounding from
  // browsers/devicePixelRatios while still catching obvious regressions
  // (e.g. white, black, or any other theme color).
  return (
    Math.abs(rgb.r - NAVY_RGB.r) <= 2 &&
    Math.abs(rgb.g - NAVY_RGB.g) <= 2 &&
    Math.abs(rgb.b - NAVY_RGB.b) <= 2
  );
}

async function checkRoute(browser, route) {
  const url = `${BASE_URL}${route.path}`;
  log(`checking ${url}`);
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    pageErrors.push(err?.stack || err?.message || String(err));
  });

  const failures = [];

  try {
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: PAGE_TIMEOUT_MS,
    });
  } catch (err) {
    failures.push(`page.goto failed: ${err?.message ?? err}`);
  }

  // Give React a moment to hydrate after networkidle in case there are
  // microtasks still queued (hydration errors fire synchronously during
  // hydration, which happens shortly after first paint).
  await page.waitForTimeout(750);

  if (route.expectNavyBackground) {
    try {
      const styles = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;
        return {
          html: getComputedStyle(html).backgroundColor,
          body: getComputedStyle(body).backgroundColor,
        };
      });
      const htmlRgb = parseRgb(styles.html);
      const bodyRgb = parseRgb(styles.body);
      if (!isNavy(htmlRgb) && !isNavy(bodyRgb)) {
        failures.push(
          `expected navy background ${NAVY_HEX} on <html> or <body>; ` +
            `got html=${styles.html} body=${styles.body}`,
        );
      }
    } catch (err) {
      failures.push(`background check threw: ${err?.message ?? err}`);
    }
  }

  const allMessages = [...consoleErrors, ...pageErrors];
  for (const msg of allMessages) {
    for (const pattern of HYDRATION_ERROR_PATTERNS) {
      if (pattern.test(msg)) {
        failures.push(`hydration regression detected (${pattern}): ${msg}`);
        break;
      }
    }
  }
  if (pageErrors.length) {
    failures.push(
      `unhandled page errors (${pageErrors.length}):\n  - ` +
        pageErrors.map((m) => m.split('\n')[0]).join('\n  - '),
    );
  }

  await context.close();

  return { url, failures, consoleErrors, pageErrors };
}

let devServer = null;
let browser = null;
let exitCode = 0;

const cleanup = async () => {
  try {
    if (browser) await browser.close();
  } catch {}
  if (devServer && devServer.exitCode === null) {
    devServer.kill('SIGTERM');
    // Hard-kill if it doesn't exit promptly.
    setTimeout(() => {
      if (devServer && devServer.exitCode === null) devServer.kill('SIGKILL');
    }, 5000).unref();
  }
};

process.on('SIGINT', () => {
  cleanup().finally(() => process.exit(130));
});
process.on('SIGTERM', () => {
  cleanup().finally(() => process.exit(143));
});

try {
  if (SHOULD_SPAWN_SERVER) {
    devServer = spawnDevServer();
  } else {
    log(`reusing existing server at ${BASE_URL}`);
  }

  await waitForServer(BASE_URL, READY_TIMEOUT_MS);
  log('server is responding');

  browser = await chromium.launch();

  const results = [];
  for (const route of ROUTES) {
    results.push(await checkRoute(browser, route));
  }

  let hadFailures = false;
  for (const r of results) {
    if (r.failures.length === 0) {
      log(`OK  ${r.url}`);
    } else {
      hadFailures = true;
      logError(`FAIL ${r.url}`);
      for (const f of r.failures) logError(`  - ${f}`);
      if (r.consoleErrors.length) {
        logError(`  console.error messages (${r.consoleErrors.length}):`);
        for (const m of r.consoleErrors) logError(`    > ${m}`);
      }
    }
  }

  if (hadFailures) {
    exitCode = 1;
  } else {
    log(`all ${results.length} route(s) passed`);
  }
} catch (err) {
  logError(err?.stack || err?.message || err);
  exitCode = 1;
} finally {
  await cleanup();
}

process.exit(exitCode);
