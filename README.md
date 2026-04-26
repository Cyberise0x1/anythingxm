# XM Real Estate

A luxury blockchain real estate platform for Nigeria. Server-rendered React
app with on-chain property verification, an animated 3D background, and a
small Hono-backed API for inquiries, notifications, and authentication.

## Stack

| Layer            | Choice                                              |
| ---------------- | --------------------------------------------------- |
| Framework        | React Router v7 (SSR enabled)                       |
| Server           | Hono via `react-router-hono-server`                 |
| Build / dev      | Vite 6, Bun                                         |
| UI               | Tailwind CSS, styled-jsx, motion (Framer Motion)    |
| 3D               | Three.js (graceful WebGL fallback)                  |
| Data fetching    | TanStack Query v5                                   |
| Auth             | Auth.js (`@hono/auth-js`, `@auth/core` Credentials) |
| Database         | Neon Postgres (`@neondatabase/serverless`)          |

## Repository layout

```
.
├── apps/
│   ├── web/          # The active web app (this README's home)
│   │   ├── src/      # React Router routes, components, utilities
│   │   ├── __create/ # Hono server entry, Auth.js adapter, route builder
│   │   ├── plugins/  # Custom Vite plugins (fonts, env, restart, etc.)
│   │   └── scripts/  # Page smoke-check script
│   └── mobile/       # Expo / React Native app (not actively maintained here)
├── shared/           # Code shared between web and mobile
├── docs/             # Setup and operations guides
└── scripts/          # Repo-wide scripts (post-merge, etc.)
```

Only `apps/web` is the actively deployed surface. `apps/mobile` is kept in
the repo for reference but is not built or deployed by anything in this
repo today.

## Quick start (local dev)

Prerequisites: [Bun](https://bun.sh) ≥ 1.3 and Node 20.

```bash
# 1. Install dependencies for the web app
cd apps/web
bun install

# 2. Configure environment
cp .env.example .env
# Edit .env and fill in DATABASE_URL, AUTH_SECRET, AUTH_URL at minimum.
# See apps/web/.env.example for the full list with explanations.

# 3. Run the dev server
bun run dev --port 5000
```

The app boots at <http://localhost:5000>. It will start without a populated
`.env` — auth and database calls just no-op or fail explicitly when their
vars are missing.

## Other useful commands

Run from `apps/web/`:

| Command                | What it does                                            |
| ---------------------- | ------------------------------------------------------- |
| `bun run dev`          | Start the React Router dev server with HMR              |
| `bun run typecheck`    | Generate route types and run `tsc --noEmit`             |
| `bun run check:pages`  | Headless-Chromium smoke test for hydration & styling    |

## Environment variables

Every variable the app reads is documented in
[`apps/web/.env.example`](apps/web/.env.example). Copy it to
`apps/web/.env` for local dev. For hosted deployments, set the same
variables in your provider's project settings.

## Deployment

The app is being prepared for deployment on
[Vercel](https://vercel.com). The full setup — build configuration, env
vars, and project settings — is documented in
[`docs/vercel-deploy.md`](docs/vercel-deploy.md), produced by the
deployment-readiness work that follows this task.

To push the codebase to GitHub for the first time (a prerequisite for
Vercel's GitHub-import flow), follow
[`docs/github-setup.md`](docs/github-setup.md).
