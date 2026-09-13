# TRACKERS4BL

A mobile-first shop for digital planners and trackers. Static Next.js
(App Router) site, no backend, no database, no auth — checkout happens on
Payhip, every buy button is an outbound link.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build — this is what Vercel runs
npm run start   # serve the production build locally
npm run lint    # eslint
```

## Deploy to Vercel

1. Push this repo to GitHub (or another git provider).
2. In Vercel, "Add New Project" → import the repo. Framework preset
   "Next.js" is auto-detected — no config needed.
3. Deploy. That's it: no environment variables are required.

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://trackers4bl.com`) once
a custom domain is attached, so Open Graph image URLs resolve to it
instead of the Vercel-assigned `*.vercel.app` domain.

## Architecture

All product data lives in `content/products/` — one file per product,
typed against `types/product.ts`. Components never contain a product
name, price, color, or piece of copy; they only render what they're
handed. Themes are plain data too: a product's `theme` object is written
onto the page as CSS custom properties (`--primary`, `--ink`, etc.) by
`<ThemeProvider>`, and Tailwind classes reference those variables
(`bg-[var(--primary)]`), so a new palette works everywhere with zero
component changes.

The homepage (`app/page.tsx`) renders `<ProductSelector>`, which branches
on how many products are visible:

- **1 product** — goes straight to that product's full page content.
- **2–3 products** — a segmented toggle in the header; picking one
  re-themes the whole page and persists the choice to `localStorage`.
- **4+ products** — the toggle is replaced by a card grid grouped by
  `category`, each card linking to `/p/[slug]`.

`/p/[slug]` pages are statically generated from the same registry and
render the same section components, so every product gets a full page
automatically.

## Adding a new product

1. Create `content/products/<slug>.ts` exporting a `Product` (copy an
   existing file as a starting point).
2. Drop its images into `public/<slug>/` (growth-stage images if it has
   them; screenshots are optional — see below).
3. Add one import + array entry in `content/products/index.ts`.
4. Set its `status` to `'live'`, `'coming-soon'`, or `'hidden'`.

That's the whole checklist. No component, route, palette, or layout file
should ever need to change to add a product — if it does, that's a bug in
the architecture, not something to work around in the new product's data.

**Screenshots are optional at launch.** The "See it" section checks at
build time whether a file exists at each screenshot's `src` path; if not,
it renders a labelled placeholder instead. Drop a real image at that
exact path later and it switches over automatically — no code change.

**Palette safety net.** In development, `lib/contrast.ts` audits every
product's theme tokens against WCAG AA and warns in the browser console
if a color combination (e.g. body text on a pale background) fails —
so a bad palette on product #20 gets caught immediately, not after launch.

## TODOs left in the code

- [`content/products/bloom.ts`](content/products/bloom.ts) —
  `checkoutUrl: 'TODO_PAYHIP_BLOOM'`, needs the real Payhip checkout link.
- [`content/products/forge.ts`](content/products/forge.ts) —
  `checkoutUrl: 'TODO_PAYHIP_FORGE'`, needs the real Payhip checkout link.
- [`components/sections/Screenshots.tsx`](components/sections/Screenshots.tsx) —
  both products render placeholder screenshots ("TODO: replace with real
  screenshot") until real images are added at the paths listed in each
  product's `screenshots` array.
- `public/bloom/og-image.png` and `public/forge/og-image.png` — referenced
  in each product's `seo.ogImage` but not yet created; add a 1200×630
  image at each path for social share previews.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. No API routes, no CMS,
no animation library — transitions are plain CSS. Fully static: every
route is prerendered at build time.
