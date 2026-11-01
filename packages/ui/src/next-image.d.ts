// Static image import type declarations for the `ui` package.
// The `packages/ui` package is not itself a Next.js app, so it doesn't get an
// auto-generated `next-env.d.ts` with a reference to `next/image-types/global`.
// This file re-adds that reference so `.png`/`.svg`/etc. imports (e.g. in
// `lib/types/icon-data.ts`) resolve to `StaticImageData` instead of failing
// with TS2307. Do not remove without providing an equivalent declaration.
/// <reference types="next/image-types/global" />
