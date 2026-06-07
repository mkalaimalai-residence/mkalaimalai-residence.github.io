# Implementation Plan: 001 — Foundation

**Spec:** `./spec.md` · **Branch:** `feat/001-foundation`

## Technical context

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript, strict mode, no `any` |
| Styling | Tailwind CSS |
| UI kit | shadcn/ui (init only this feature — `cn` helper + CSS-var wiring) |
| Icons | lucide-react |
| Fonts | `next/font` — refined serif (Fraunces / Cormorant) for headings, Inter sans for body |
| Persistence | Local TS modules in `data/`, read through async `lib/repository` |
| Deploy target | Vercel |

## Constitution check

- Repository boundary ✓ (UI → `lib/repository` only)
- Relations by ID ✓ (`*Ids` + `lib/relations`)
- Strict TS, tokens-not-hex ✓
- Public anonymized ✓ (villa no./address portal-only fields)
- Real seed ✓ (≥2–3 cross-linked rows per entity)

No violations; no complexity-tracking entries required.

## Project structure

```
app/
  layout.tsx        # fonts + global CSS, exposes --font-serif / --font-sans
  page.tsx          # minimal placeholder (foundation status); real UI is Feature 002
  globals.css       # theme tokens as CSS variables + Tailwind theme mapping
types/
  index.ts          # all 14 entity interfaces
lib/
  repository.ts      # async getX() per entity + by-id / by-slug finders
  relations.ts       # spacesByIds / domainsByIds / vendorsByIds / ... + single-id lookups
  utils.ts           # cn (shadcn) + formatINR + landedFromEUR
data/
  project.ts spaces.ts domains.ts materials.ts drawings.ts vendors.ts procurement.ts
  decisions.ts boq.ts progress.ts snags.ts warranties.ts lessons.ts gallery.ts
public/images/
  elevation/  spaces/  renders/
scripts/
  verify-data.ts     # counts + sample relation chain; run via `npm run verify`
```

## Phases

1. **Setup / tooling** — scaffold, deps, shadcn init, fonts.
2. **Theme tokens** — palette + fonts as CSS vars + Tailwind theme.
3. **Types (the contract)** — port all interfaces; preserve `*Ids` and exact unions.
4. **Data-access layer** — repository (async) + relations (sync) + utils helpers.
5. **Seed data** — fix shared ID/slug scheme first, then populate all 14 modules with
   cross-referencing rows.
6. **Image assets** — copy/optimize elevations; install poppler, extract/optimize PDF renders;
   wire paths into seed.
7. **Verify** — harness + placeholder page; `tsc`, `verify`, `build`.

Task-level detail is in `./tasks.md`.

## Reused helpers
- shadcn-generated `cn` (class merge).
- `formatINR(n)` — INR currency formatting at render.
- `landedFromEUR(eur, multiplier = 1.75)` — EUR ex-works → landed INR (build doc §11, ~1.7–1.8×).
