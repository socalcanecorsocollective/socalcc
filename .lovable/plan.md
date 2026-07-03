
# SCCC — Flagship Rebuild Plan

## Ground rules (asset lock enforcement)

Your master prompt bans AI-generated imagery. In the current build I previously
generated 5 apparel shots (hoodie, pack-leader tee, cap, crewneck, legacy jacket).
Under the new rules those must go. Options:

- **A. Strict** — remove the 5 generated files, render neutral placeholder frames
  in those cards with a small "Image forthcoming" mark, and list the missing
  assets so you can drop reals into `/src/assets`. *(Default — matches your rules.)*
- **B. Keep** — leave the current apparel shots in place until you supply reals.

Confirm A or B; I'll default to **A** unless you say otherwise. Real product
photos already present (5 pack-gear WEBPs + Alpha Tee + hero) stay untouched.
No brand mark will be regenerated.

## Architecture

Move from ad-hoc components to a typed data platform:

```text
src/lib/
  types.ts          Artist, Drop, Product, Category, Chapter
  artists.ts        roster (Xenvectors founding)
  drops.ts          chapter 001 live; 002+ upcoming (locked)
  products.ts       every product tagged chapterId + artistId
  categories.ts     Apparel, Pack Gear, Patches & Prints (+ reserved future)
  cart.tsx          zustand store + slide-in drawer state
```

All grids, PDPs, artist pages, and attribution render from these arrays —
adding an artist/drop/product is a data edit, not a code edit.

## Routes (TanStack file-based)

```text
/                    home (sections below)
/shop                all products, category filters
/product/$id         PDP: gallery, artist credit, chapter tag, add-to-cart
/collective          artist roster
/artist/$id          artist page (bio, statement, their pieces)
/drops               chapter timeline (001 live, 002+ upcoming)
/drops/$chapter      chapter detail
/lookbook            full lookbook
/bloodline           story page
/reserve             deposit flow
```

Each route: real `head()` with distinct title/description/og.

## Home (scroll order)

Nav · Hero · Creed I · Apparel II · Bloodline III · Pack Gear IV ·
Patches & Prints · Collective V · Drops Archive · Lookbook · Reserve VI · Footer.

Coordinated motion recipe reused per section: eyebrow slide → headline
mask-reveal line-by-line → content stagger. Single easing token
`[0.19,1,0.22,1]`. Reduced-motion collapses to instant fade.

## New / rebuilt components

- **Nav** — scroll-tracked active-section gold underline, cart badge, focus-trapped mobile overlay.
- **Hero** — multi-stage reveal (grain → mascot seal → DROP 001 mask reveal → copy/CTA), Ken-Burns 1.0→1.06, pulse-then-fade scroll cue.
- **CreedBand** — pinned pull-quote.
- **ProductCard** — asymmetric sizing, hover zoom + gold underline wipe + price/View slide, "Art by X · Chapter 00N" gold label, "New"/"Pack Gear" tags, blur-up skeleton, links to `/product/$id`.
- **ProductGrid** — data-driven from `products.ts` + category filter.
- **PatchesPrints** — new section + Chapter 001 patches/prints entries.
- **Collective** — roster grid, hover statement reveal, "Join the Collective" form (UI + success state, no backend).
- **ArtistPage** — reusable detail.
- **DropsArchive** — timeline; 002+ locked with Notify state (email capture UI-only).
- **Lookbook** — Lenis-inertia horizontal scroll, 2.39:1 letterbox, numbered 01/06.
- **Reserve** — $25 deposit flow, email capture, success state, "notified 48h ahead."
- **CartDrawer** — slide-in, line items, subtotal, checkout CTA (UI stub).
- **MascotSeal** — shared component: nav mark, footer seal, section-divider centered mark on hairline, hero low-opacity watermark. One asset, capped mobile size.
- **SectionDivider** — hairline + centered mascot mark for chapter breaks.

## Data seeding

- Chapter 001 · Xenvectors · live · dated MMXXVI · all current products.
- Chapters 002–004 · TBA artists · upcoming · locked cover, countdown/notify.
- Patches: "Guardian" MOLLE patch $15, "Legion" morale patch $12, "SCCC Crest" print $30, "Bloodline" print $45 — placeholder frames until you supply art.
- Artists: Xenvectors (founding) with your provided bio placeholder; you can edit copy after.

## Design system tightening

- Type scale locked in `styles.css` via `@theme` tokens; single eyebrow style for numerals + Roman chapter marks.
- 8px baseline utilities; `--faint` token added.
- Global grain+vignette overlay component at root.
- Section spacing `clamp(90px,14vw,220px)` token.
- Sitewide easing token + reduced-motion utility.
- Unified card aspect ratio (4/5) so grid reads as one shoot.

## PDP + cart + reserve behavior

- PDP: gallery (single image for now, expandable), zoom on hover, size selector (S–XXL for apparel; S/M/L for gear), qty, add-to-cart writes to zustand store, artist + chapter chips linking to their pages.
- Cart drawer: opens from nav badge, line items, remove/qty, subtotal, "Checkout" CTA (stub toast: "Checkout coming with Chapter 001 ship window").
- Reserve: form → success state; upcoming-chapter "Notify me" identical pattern.

## Accessibility & perf

Semantic landmarks, alt on every image, skip-to-content, focus-visible rings in gold, keyboard-navigable menu/cart/modal, AA contrast audit, `prefers-reduced-motion` on every motion component, lazy-load below fold, preload hero, image dimensions set.

## Out of scope this pass

- Real checkout / payments (UI stubs only).
- Backend for collective submissions or reserve deposits.
- Replacing the 5 previously AI-generated apparel shots with real photos (needs your uploads).

## Deliverable

One PR-sized change: new data layer, new routes, rebuilt sections, cart drawer, mascot-seal system, coordinated motion, accessibility pass. Home page recomposed to the 12-section order. Everything else driven by data so Chapter 002 is a JSON edit.

---

Reply **go** (or "go with B" to keep the current apparel shots) and I'll build it.
