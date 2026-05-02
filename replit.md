# XM Real Estate — Luxury Blockchain Real Estate Platform (Nigeria)

> **Agents: read `CHANGELOG.md` BEFORE debugging hydration warnings, "crash"
> overlays, or the home-page splash. Many of those errors are pre-existing
> dev-mode noise and there is a documented list of "do not chase" loops.**

## Overview
A luxury real estate web app for Nigeria, featuring blockchain-verified properties, Three.js particle animations, DALL-E 3 property images, and Auth.js authentication.

## Tech Stack
- **Framework**: React Router v7.6.0 (SSR enabled)
- **Build tool**: Vite + Bun
- **Server**: Hono (via react-router-hono-server v2.13.0)
- **Styling**: Tailwind CSS + styled-jsx
- **3D**: Three.js (with WebGL graceful fallback)
- **Data fetching**: TanStack Query v5
- **Auth**: @hono/auth-js + @auth/core
- **Database**: Neon DB (serverless Postgres)
- **Animations**: motion/react (Framer Motion)
- **Monorepo**: apps/web + shared/

## Project Structure
```
apps/web/
  src/
    app/          # React Router routes
      root.tsx    # Root layout, error boundaries, SessionProvider
      page.jsx    # Main RealEstatePage component
      layout.jsx  # TanStack Query provider wrapper
      routes.ts   # Auto-generated file-based routes
    components/   # Shared UI components
      ThreeBackground.jsx  # Three.js particle animation (WebGL)
      Cursor.jsx
      Navbar.jsx
      ComingSoonModal.jsx
    __create/     # Infrastructure: Hono server, auth, fetch wrapper
  __create/
    index.ts      # Hono server entry (auth, DB, API routes)
  plugins/        # Custom Vite plugins
  vite.config.ts
  react-router.config.ts
shared/
  design-mode.ts
```

## Key Configuration
- **SSR**: disabled (`ssr: false` in react-router.config.ts) — SPA mode to eliminate hydration mismatches
- **Dev port**: 5000 (workflow: `cd apps/web && bun run dev --port 5000`)
- **Auth**: guarded by `process.env.AUTH_SECRET` check — returns `null` gracefully if not set
- **Database**: guarded by `process.env.DATABASE_URL` — Neon Pool created with undefined connection if not set

## Fixes Applied
1. **shared/design-mode.ts** — Created missing file to fix import error
2. **root.tsx** — Fixed hydration mismatch: moved `<Links>` before `<Meta>`, added `suppressHydrationWarning` to `<head>`, set `LoadFontsSSR = null` in dev mode
3. **vite.config.ts** — Fixed multiple React instances: added `@hono/auth-js/react` and `@auth/core/errors` to `optimizeDeps.include`; added `react/jsx-runtime` and `react/jsx-dev-runtime` to `resolve.dedupe`
4. **__create/@auth/create.js** — Fixed auth crash: guarded `AUTH_URL?.startsWith('https') ?? false`
5. **__create/index.ts** — Fixed ClientFetchError: `/api/auth/*` returns `c.json(null, 200)` when `AUTH_SECRET` is not set
6. **layout.jsx** — Fixed TanStack Query v5 deprecation: renamed `cacheTime` → `gcTime`
7. **ThreeBackground.jsx** — Fixed "Error creating WebGL context" crash: wrapped entire Three.js `WebGLRenderer` initialization in try/catch
8. **__create/not-found.tsx** — Created missing 404 route component referenced in routes.ts; then converted from server `loader` to client-only component when SSR was disabled
9. **react-router.config.ts** — Disabled SSR (`ssr: false`) to eliminate React 18 hydration mismatches and uncaught `window.onerror` events
10. **entry.client.tsx** — Simplified client entry (no hydration boundary needed in SPA mode)
11. **Sora global font** — Added Sora as `font-sans` and `font-display` in `tailwind.config.js`; applied `font-sans` to `html`/`body`/inputs/buttons in `global.css`; ships Google Fonts stylesheet for Sora 100–800 via React Router's `links` route export so server and client agree (preconnect to fonts.googleapis.com + fonts.gstatic.com with `display=swap` for FOUT-safe loading)
12. **root.tsx Fast Refresh restored** — Extracted non-component exports (`links`, `useHmrConnection`, `useHandshakeParent`, `useHandleScreenshotRequest`, `waitForScreenshotReady`) to sibling `apps/web/src/app/root.lib.ts`; `root.tsx` re-exports `links` to satisfy the React Router 7 route-module contract. Edits to `root.tsx` now hot-update without `Could not Fast Refresh` and without replaying the splash screen.

## Dev environment requirements
- **Bun module**: `bun-1.3` (installed via Replit modules) — workflow command `bun run dev --port 5000` requires it on PATH
- **System lib**: `gcc-unwrapped` (installed via Nix system deps) — provides `libstdc++.so.6` needed by the `argon2` native module at SSR time

## Environment Variables Required for Full Functionality
- `DATABASE_URL` — Neon DB connection string (app works without it, DB features disabled)
- `AUTH_SECRET` — Auth.js secret (app works without it, auth features disabled)
- `AUTH_URL` — Auth base URL

## Notes
- DALL-E 3 images require `NEXT_PUBLIC_PROJECT_GROUP_ID` and Create.xyz credentials
- The app shows a loading animation for ~1 second on first load
- Three.js particle background gracefully degrades when WebGL is unavailable

## Smoke check (`bun run check:pages`)
- `apps/web/scripts/check-pages.mjs` boots a headless Chromium against the dev
  server (it spawns its own on port 5051 by default; set `CHECK_BASE_URL` to
  reuse a running one) and validates each route in `ROUTES`.
- Asserts: (1) no hydration / "Expected server HTML" / unhandled page errors,
  (2) the dark-navy `#0A1929` background is actually applied on the home page.
- Run with `bun run check:pages` from `apps/web/`. Exits non-zero on the first
  failure so it's safe to wire into CI or a pre-commit hook.
- Browser binaries live under `apps/web/.playwright-browsers/` (gitignored).
  Re-install with `PLAYWRIGHT_BROWSERS_PATH=$PWD/.playwright-browsers bunx playwright install chromium`.
