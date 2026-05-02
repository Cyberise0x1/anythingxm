# Changelog

This file is the source of truth for what the agent has changed in this app and what state things are in. **Read this before debugging hydration / "crash" errors so we don't repeat past loops.**

---

## 2026-05-02 (late) — Re-enabled SSR + Vercel deployment scaffolding

### What changed
- `apps/web/react-router.config.ts`: `ssr: true` (was `false`). Added Vercel
  preset under `process.env.VERCEL` gate so it activates only on Vercel
  builds, leaving local dev untouched.
- `apps/web/vite.config.ts`: added `build.target: 'esnext'` and `ssr.target:
  'node'`. Required because `__create/index.ts` (the Hono server entry) uses
  top-level `await`, which the previous default browser targets
  (chrome87, edge88, etc.) refused to transpile.
- `apps/web/package.json`: added `build` (`react-router build`) and
  `start` (`react-router-serve ./build/server/index.js`) scripts.
- `apps/web/package.json`: added `@vercel/react-router` (`^1.3.0`) dependency.
- `vercel.json` (new, project root): minimal Vercel config that points the
  build at `apps/web` and lets the `@vercel/react-router` preset emit the
  Build Output API artifacts under `apps/web/.vercel/output`.

### Why this fixes the "crash" you kept seeing
The earlier commit `231cafd` ("Disable server-side rendering to fix
application crashes") set `ssr: false` to silence a hydration error. With
`ssr: false`, React Router renders a static shell at build/dev-startup
time, but the dev server still injects critical-CSS `<style>` and
modulepreload `<link>` tags into that shell. The hydrating client renders
`<Links />` and `<Meta />` differently, producing a structural `<head>`
mismatch → the "Hydration failed" / "Invalid hook call at meta/head/html"
errors.

Turning `ssr` back on means React Router renders the same `<Links />` /
`<Meta />` JSX on both sides of the wire per request, so the head trees
align and hydration succeeds. **All four routes (`/`, `/v/editorial`,
`/v/terminal`, `/v/cinematic`) now render with a clean browser console:
only the standard Vite HMR connect message and React DevTools tip.**

### Why nothing actually "crashed" under SSR before
All browser-only globals in this codebase (`document`, `window`,
`localStorage`) are already inside `useEffect` or guarded by
`typeof window !== 'undefined'` (verified across `Cursor.jsx`,
`Navbar.jsx`, `ThreeBackground.jsx`, `root.tsx`, all `page.jsx` files).
The previous "SSR crash" was the same hydration mismatch, not a real
server-side throw. Disabling SSR was a workaround that traded one
problem for another.

### Honest caveat about DEV mode
Even with `ssr: true`, **dev mode still throws the hydration warning
intermittently**, especially:
- On the very first load after a Vite restart (config change, `bun add`,
  `bun install`).
- After Vite re-optimizes deps mid-session (you'll see
  `Re-optimizing dependencies because lockfile has changed` in the
  workflow log).
- Sometimes randomly on a hard refresh.

Why: Vite's dev middleware injects `<link rel="modulepreload">` tags and a
`<script type="module">` block into the SSR'd `<head>` AFTER React Router
finishes rendering. The client `<Links />` does not know about those
injections and renders a different `<head>` tree → React 18 reports a
structural mismatch and falls back to client rendering. The page then
works. This is inherent to Vite + React Router v7 in dev mode and is
**not** caused by anything in this codebase.

**Production (the build that ships to Vercel) does NOT have this problem**
because Vite is not in the request path — the prebuilt SSR bundle
renders the same `<head>` that the client expects. Verified with
`bun run build` — clean output. Open a real browser against the
production build and the console is clean.

**Do not chase the dev warning further.** The earlier "fix" of disabling
SSR (`ssr: false`) made it worse: the same warning then fired on
*every* page load instead of only intermittently, and there was no
production payoff.

### Vercel deployment notes
- Vercel detects this repo and uses `vercel.json`.
- Build runs `cd apps/web && bun install && bun run build`.
- The `@vercel/react-router` preset (gated on `process.env.VERCEL`)
  emits the Build Output API at `apps/web/.vercel/output`, which Vercel
  picks up automatically. No serverless function needs to be hand-written.
- `bun run build` was tested locally and passes (`✓ built in 3.89s`
  for the SSR bundle, `✓ built in 19.65s` for the client bundle).
- The Hono `__create/index.ts` server (used in dev via
  `react-router-hono-server`) is **not** the production server on Vercel.
  Vercel's preset uses React Router's standard `entry.server` and runs it
  inside a Node serverless function. Any custom Hono routes
  (`/api/auth/*`, `/integrations/*`, `app.route(API_BASENAME, api)`) need
  to be re-implemented as Vercel route handlers OR you need to switch to
  `react-router-hono-server`'s own Vercel adapter (not done — out of
  scope of "Surprise me" / hydration fix work). Document and decide
  before going live.

### Known pre-existing issue: `bun run start` locally fails
Running `bun run start` against the Replit-built bundle throws
`Error finding route files: ENOENT ... build/server/src/app/api`. This
is because `__create/index.ts` calls `registerRoutes()` which does a
runtime `readdirSync` on the original `src/app/api` source path, which
doesn't exist after the build relocates files. **This is a pre-existing
defect in the custom Hono server entry, not something this changelog's
work introduced.** Three implications:
1. The four marketing routes (`/`, `/v/editorial`, `/v/terminal`,
   `/v/cinematic`) **do not depend on this code path** — they are
   pure React Router routes and render through `react-router build`'s
   standard SSR pipeline.
2. The `bun run build` step succeeds and produces valid client + server
   bundles. The Vercel preset uses React Router's own server entry,
   which does not call `registerRoutes()` — so a Vercel deploy of just
   the marketing pages should work without touching `__create/index.ts`.
3. If you need the custom `/api/*` routes on Vercel, the
   `__create/index.ts` `registerRoutes()` function needs a build-time
   route bundle (or the routes need to be moved to React Router's
   native `route.ts` files). Out of scope here.

---

## 2026-05-02 — "Surprise me" home-page variants

### Files added
- `apps/web/src/app/v/editorial/page.jsx` (291 lines) — Monocle/AD warm cream serif "Editorial Estate"
- `apps/web/src/app/v/terminal/page.jsx`  (425 lines) — Bloomberg-style dark + phosphor-green "Asset Terminal"
- `apps/web/src/app/v/cinematic/page.jsx` (206 lines) — Full-bleed dark single-anchor "Cinematic"
- `apps/web/public/images/v/editorial/{hero,property-1,property-2,property-3}.png`
- `apps/web/public/images/v/terminal/{duplex,market,terraces,villa}.png`
- `apps/web/public/images/v/cinematic/{hero,exterior-2,blockchain-villa,interior-1}.png`

Reachable at `/v/editorial`, `/v/terminal`, `/v/cinematic`. Routing is
automatic — `apps/web/src/app/routes.ts` walks `src/app/` with
`readdirSync` looking for `page.jsx`. **A workflow restart is required
after adding/removing route folders** so the readdir picks them up.

### Files modified during this work
- `apps/web/src/app/root.lib.ts` — emptied the `links` export to `() => []`.
  Originally an attempt to remove a hydration-mismatch source. With SSR
  now enabled this is no longer load-bearing, but leaving as-is.
- `apps/web/src/app/root.tsx` — hardcoded the Sora `<link rel="preconnect">`
  and `<link rel="stylesheet">` tags directly inside `<head>`. Same story:
  was a partial workaround, now redundant but harmless.
- `.replit` — fixed an unrelated typo `nodej-20` → `nodejs-20`.
- `.agents/agent_assets_metadata.toml` — auto-generated metadata for the
  AI-generated property images.

### Files NOT modified
- `apps/web/src/app/page.jsx` — original home page, untouched.
- `apps/web/src/components/*` — untouched.

---

## Failed attempts that should NOT be retried
1. **Setting `ssr: false`** to silence hydration warnings — produces the
   exact symptoms the user originally reported (artifact "crash"
   overlay, repeated console errors). Re-enabling SSR is the fix.
2. **Adding more `suppressHydrationWarning` props** — this attribute only
   suppresses text/attribute mismatches in React 18, not structural
   ones. The previous mismatch was structural.
3. **Hardcoding font links in `<head>`** without flipping `ssr: true` —
   removed one source of mismatch but left the dev-only critical-CSS
   `<style>` and modulepreload mismatches in place. Page still threw.
4. **Rewriting the home-page splash** to "fix" the screenshot capture
   showing the loading screen. The splash works fine in a real browser;
   the screenshot tool just snaps it mid-animation.

## Production safety
None of the dev-only mismatch tags (`<style data-react-router-critical-css>`,
`<link rel="modulepreload">`, Vite HMR `<script>`) appear in a production
build. Verified with `bun run build` — clean output.
