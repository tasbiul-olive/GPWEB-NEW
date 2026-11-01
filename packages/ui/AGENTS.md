# AGENTS - @workspace/ui

This file documents package-specific conventions and "agent" guidance for the UI package. Keep these rules short and concrete so other contributors and automation can rely on a single, consistent approach.

Important notes

- This monorepo may use a custom Next.js version and conventions. Follow package-level rules here rather than assuming Next's defaults.

Font handling (single authoritative source)

- Store font files in `packages/ui/src/fonts/`.
- Register fonts in `packages/ui/src/styles/fonts.css` using `@font-face`.
  - Prefer WOFF2 first, then fall back to WOFF:
    src: url("../fonts/YourFont.woff2") format("woff2"), url("../fonts/YourFont.woff") format("woff");
  - Use `font-display: swap;` to keep text visible while fonts load.
  - Expose a CSS variable for the font (for example `--font-telenor`) so consuming apps can use a consistent variable name.
- `packages/ui/src/styles/globals.css` must import `fonts.css` so importing `@workspace/ui/globals.css` is sufficient for consumers.

Consumer apps

- Consuming apps should import `@workspace/ui/globals.css` (in `app/layout.tsx` for Next.js app-router) to receive all theme tokens and font variables.
- For best perceived performance, consumers may preload fonts from their public folder. Recommended public paths are `/fonts/YourFont.woff2` and `/fonts/YourFont.woff`.
  - Example preload tags in `app/layout.tsx`:
    ```tsx
    <link rel="preload" href="/fonts/YourFont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/YourFont.woff" as="font" type="font/woff" crossOrigin="anonymous" />
    ```
- Prefer the CSS @font-face approach in this workspace. It keeps behavior consistent across non-Next and custom-Next apps.

Adding a new font (summary)

1. Copy font files into `packages/ui/src/fonts/`.
2. Add a `@font-face` block to `packages/ui/src/styles/fonts.css`, expose a CSS variable (e.g. `--font-new`).
3. Use that variable from `@workspace/ui/globals.css` or directly from components.

Exports and package boundaries

- If you add programmatic font helpers (for example `src/lib/fonts.ts`), make sure to also update `package.json` `exports` if you want consumers to import them via `@workspace/ui/lib/...`.

Avoid per-app font implementation steps where possible. The goal is that importing `@workspace/ui/globals.css` should be enough for most projects to get fonts and theme tokens.

If automation is needed

- Prefer small, explicit helper scripts that copy built/flat assets into consuming app public folders. Keep them in the repo `scripts/` directory and document usage here.

Contact

- If unsure about font metrics or compatibility, open a PR with the font files and a short visual test page in `apps/web` so we can validate rendering across browsers.
