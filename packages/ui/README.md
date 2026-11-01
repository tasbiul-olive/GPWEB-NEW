# `@workspace/ui`

Shared UI components, styles, and utilities for apps in this monorepo.

This package provides:

- reusable UI components (for example `button`, `table`)
- shared helpers (`lib/*`)
- global styles (`globals.css`) with Tailwind v4 and theme tokens
- local font assets and helpers (`lib/fonts`)

## Install in a workspace app

`apps/web/package.json` already depends on this package:

```json
{
  "dependencies": {
    "@workspace/ui": "workspace:*"
  }
}
```

## Quick start (Next.js app router)

In your app layout, import global styles and apply the packaged font variable:

```tsx
import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { TelenorFont } from "@workspace/ui/lib/fonts"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("antialiased", TelenorFont.variable)}>
      <body>{children}</body>
    </html>
  )
}
```

## Exports

The package currently exports:

- `@workspace/ui/globals.css`
- `@workspace/ui/postcss.config`
- `@workspace/ui/lib/*`
- `@workspace/ui/components/*`
- `@workspace/ui/hooks/*`

See `packages/ui/package.json` for the source-of-truth `exports` map.

## Fonts

Font files live in `packages/ui/src/fonts/` and are wired in two ways:

- CSS `@font-face` definitions in `packages/ui/src/styles/fonts.css`
- Next.js local font helper in `packages/ui/src/lib/fonts.ts`

### Add a new font

1. Add your font file to `packages/ui/src/fonts/` (prefer `.woff2` when possible).
2. Register it in `packages/ui/src/styles/fonts.css` with `@font-face`.
3. Add a matching CSS variable in `:root` (for example `--font-brand`).
4. (Optional) Export a helper from `packages/ui/src/lib/fonts.ts` if you want to use `next/font/local`.

Example CSS snippet:

```css
@layer base {
  @font-face {
    font-family: "BrandFont";
    src: url("../fonts/BrandFont.woff2") format("woff2");
    font-weight: 400 700;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-brand:
      "BrandFont", system-ui, -apple-system, "Segoe UI", Roboto,
      "Helvetica Neue", Arial;
  }
}
```

## Local development

From the repo root:

```bash
pnpm --filter @workspace/ui lint
pnpm --filter @workspace/ui typecheck
pnpm --filter @workspace/ui format
```

## Troubleshooting

- If styles are missing, confirm your app imports `@workspace/ui/globals.css` exactly once.
- If a font does not load, verify relative paths in `fonts.css` and restart the dev server.
- If a symbol import fails, check that it is included in `packages/ui/package.json` `exports`.
