# XM Real Estate — Luxury Blockchain Real Estate Platform (Nigeria)

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
- **SSR**: enabled (`ssr: true` in react-router.config.ts)
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
7. **ThreeBackground.jsx** — Fixed "Error creating WebGL context" crash: wrapped entire Three.js `WebGLRenderer` initialization in try/catch (React 18 propagates `useEffect` errors to error boundaries)
8. **__create/not-found.tsx** — Created missing 404 route component referenced in routes.ts

## Environment Variables Required for Full Functionality
- `DATABASE_URL` — Neon DB connection string (app works without it, DB features disabled)
- `AUTH_SECRET` — Auth.js secret (app works without it, auth features disabled)
- `AUTH_URL` — Auth base URL

## Notes
- DALL-E 3 images require `NEXT_PUBLIC_PROJECT_GROUP_ID` and Create.xyz credentials
- The app shows a loading animation for ~1 second on first load
- Three.js particle background gracefully degrades when WebGL is unavailable
