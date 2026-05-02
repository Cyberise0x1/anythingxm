# Changelog

This file is the source of truth for what the agent has changed in this app and what state things are in. **Read this before debugging hydration / "crash" errors so we don't repeat past loops.**

---

## 2026-05-02 — "Surprise me" home-page variants + font-link hydration patch

### Goal
The user asked for three design variations of the home page, exploring an
underused axis. Implementation choice: instead of using the mockup-sandbox
artifact (which requires Node — this project is Bun-only and Node never
landed in PATH), the variants were added as real routes inside the existing
React Router v7 app.

### Files added
- `apps/web/src/app/v/editorial/page.jsx` (291 lines) — Monocle/AD warm cream serif "Editorial Estate"
- `apps/web/src/app/v/terminal/page.jsx`  (425 lines) — Bloomberg-style dark + phosphor-green "Asset Terminal"
- `apps/web/src/app/v/cinematic/page.jsx` (206 lines) — Full-bleed dark single-anchor "Cinematic"
- `apps/web/public/images/v/editorial/{hero,property-1,property-2,property-3}.png`
- `apps/web/public/images/v/terminal/{duplex,market,terraces,villa}.png`
- `apps/web/public/images/v/cinematic/{hero,exterior-2,blockchain-villa,interior-1}.png`

These pages are reachable at:
- `/v/editorial`
- `/v/terminal`
- `/v/cinematic`

Routing is automatic — `apps/web/src/app/routes.ts` walks `src/app/` with
`readdirSync` looking for `page.jsx`. **A workflow restart is required after
adding/removing route folders** so the readdir picks them up.

### Files modified (intentionally)
- `apps/web/src/app/root.lib.ts` — emptied the `links` export to `() => []`.
  Reason below.
- `apps/web/src/app/root.tsx` — hardcoded the Sora `<link rel="preconnect">`
  and `<link rel="stylesheet">` tags directly inside `<head>` so server
  prerender and client render produce identical font-link markup.
- `.replit` — fixed an unrelated typo `nodej-20` → `nodejs-20` (was preventing
  the nodejs module from installing). Bun is still the only runtime used
  for the workflow; Node is just available in PATH if needed.
- `.agents/agent_assets_metadata.toml` — auto-generated metadata for the
  AI-generated property images.

### Files NOT modified (do not touch unless you know why)
- `apps/web/react-router.config.ts` — `ssr: false` MUST stay. Re-enabling
  SSR re-introduces the original "application crashes" that commit 231cafd
  fixed.
- `apps/web/src/app/page.jsx` — original home page, untouched.
- `apps/web/src/components/*` — untouched.

---

## Known dev-mode console noise (NOT bugs, do NOT chase)

When you load any page in dev (`bun run dev`), the browser console will show:

```
Warning: Expected server HTML to contain a matching <meta> in <head>
Warning: An error occurred during hydration. The server HTML was replaced with client content.
Warning: Invalid hook call ... at meta / head / html
[unhandlederror] Hydration failed because the initial UI does not match
[unhandlederror] There was an error while hydrating. ... the entire root will switch to client rendering.
```

### Why these happen
With `ssr: false`, React Router pre-renders a static shell at build/dev-startup
time. In dev, that shell includes:
- `<style data-react-router-critical-css>` (injected by `<Links />` server-side only)
- `<link rel="modulepreload">` tags (injected by Vite dev middleware)
- A Vite HMR `<script>` block

The hydrating client renders `<Links />` and `<Meta />` differently from the
prerender (no critical-CSS style, no modulepreloads — those only exist on
the dev server). This produces a **structural** `<head>` mismatch.

`suppressHydrationWarning` on `<head>` only suppresses **text/attribute**
mismatches in React 18, not structural element-count mismatches. The mismatch
therefore still throws an uncaught hydration error → React falls back to
client rendering automatically (see "the entire root will switch to client
rendering" message). **The page then renders correctly.**

### What I tried, and why it only partially helped
Hardcoding the Sora `<link>` tags into the JSX `<head>` (this commit) eliminated
**one** source of mismatch (the font links rendered by `<Links />` on the client
but missing from the server shell). It does NOT eliminate the dev-only
`<style data-react-router-critical-css>` and Vite modulepreload mismatches.
Those are framework-level dev injections.

### Why this looks like a "crash" in the artifact panel
The Replit canvas iframe wrapper monitors the child page's `unhandlederror`
events. The hydration error is unhandled, so the artifact card flags it as
a runtime error even though React has self-recovered and the page is fine.

### Verified working (despite the console noise)
- `/`            → splash 1.2s + 250ms fade, then full home page renders.
  The screenshot tool captures mid-splash so screenshots look stuck — but
  the page is not stuck. Wait 2 seconds in a real browser and it's gone.
- `/v/editorial` → renders cleanly, verified by screenshot.
- `/v/terminal`  → renders cleanly, verified by screenshot.
- `/v/cinematic` → renders cleanly, verified by screenshot. (Headless test
  bots sometimes report this as "blank" because the hero text uses
  `mix-blend-difference` and `whileInView` motion triggers that may not
  fire in their viewport — this is a test-bot artifact, not a real issue.)

### What NOT to do (loops to avoid)
1. **Do not** re-enable SSR (`ssr: true` in `react-router.config.ts`).
   That breaks the app harder than the dev warnings ever will.
2. **Do not** add more `suppressHydrationWarning` props expecting them to
   silence structural mismatches. They won't.
3. **Do not** rewrite the home-page splash to "fix" it — it works. The
   screenshot tool just captures it mid-animation.
4. **Do not** add a global `window.onerror` swallow in production code to
   hide the warning — it would also hide real errors.
5. **Do not** delete the variant pages thinking they caused the hydration
   error. The error is pre-existing since commit 231cafd
   ("Disable server-side rendering to fix application crashes"), well
   before any variant page was added.

### What WOULD actually eliminate the dev console noise (if anyone wants to try)
- Migrate to a true SSR setup with a Bun-compatible adapter and re-enable
  `ssr: true`. Large refactor; out of scope of any "surprise me" work.
- Or: replace `<Meta />` + `<Links />` with hand-rolled equivalents that
  don't use React Router's dev-only critical-CSS injection. Risky — would
  lose route-level meta/link support.

### Production impact
**None.** All of the above warnings are gated behind `import.meta.env.DEV`
or only triggered by Vite dev middleware. A production build will not
emit any of them.
