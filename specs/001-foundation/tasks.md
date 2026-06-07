# Tasks: 001 — Foundation

**Plan:** `./plan.md` · `[P]` = parallel-safe (independent file, no shared edit)

## Phase 3.1 — Setup
- [x] **T001** `create-next-app` at repo root (TS strict, Tailwind, ESLint, App Router); leave `/artifacts` untouched.
- [x] **T002** `[P]` `.gitignore` (node_modules, .next, .DS_Store, .env*); install `lucide-react`; init shadcn/ui (`components.json`, `lib/utils.ts` `cn`).
- [x] **T003** `[P]` Configure `next/font` serif + sans as CSS vars in `app/layout.tsx`.
- [x] **T004** Theme tokens → `app/globals.css` + Tailwind theme (bg warm-white, surface ivory, muted stone, accent beige, fg charcoal, border soft-grey).

## Phase 3.2 — Contract (types)
- [x] **T005** `[P]` Port all build-doc §7 interfaces → `types/index.ts` (preserve `*Ids`, exact unions).
- [x] **T006** `[P]` Define `Project` + `GalleryItem` interfaces to match their data files.

## Phase 3.3 — Data-access layer
- [x] **T007** `lib/repository.ts` — async getters + by-id / by-slug finders; header note "UI imports only from here."
- [x] **T008** `lib/relations.ts` — `spacesByIds / domainsByIds / vendorsByIds / drawingsByIds / decisionsByIds / lessonsByIds / materialsByIds` + single-id lookups.
- [x] **T009** `lib/utils.ts` — keep `cn`; add `formatINR`, `landedFromEUR`.

## Phase 3.4 — Seed data (T010 first: fixes shared IDs/slugs)
- [x] **T010** Agree ID + slug scheme. Space slugs: living-room, dining, kitchen, master-bedroom, bedroom-2, bedroom-3, bathrooms, courtyard, terrace, landscape, multipurpose-room. 14 domain slugs.
- [x] **T011** `data/project.ts` — project record (Studio Anagami, Bengaluru); public title anonymized; villa no./community/address redacted in this public repo (portal-only).
- [x] **T012** `[P]` `data/spaces.ts` — real rooms + design intents, cross-linked.
- [x] **T013** `[P]` `data/domains.ts` — 14 domains with `spaceIds` back-links.
- [x] **T014** `[P]` `data/vendors.ts` — painting, steel-staircase fab, lighting (representative + TODO).
- [x] **T015** `[P]` `data/boq.ts` — BOQ rows tied to those vendors.
- [x] **T016** `[P]` `data/procurement.ts` — Italy furniture (EUR ex-works, landed via ×1.75) + Turkey items.
- [x] **T017** `[P]` `data/decisions.ts` — Sync Technologies (KNX/BAB) vs Home Theatre Plus (KNX/Control4); options + reasoning + impacts.
- [x] **T018** `[P]` `data/lessons.ts` — negotiation & hidden-cost learnings, impact tags.
- [x] **T019** `[P]` `data/drawings.ts` — 2–3 cross-linked rows.
- [x] **T020** `[P]` `data/materials.ts` — 2–3 cross-linked rows.
- [x] **T021** `[P]` `data/progress.ts` — 2–3 cross-linked rows.
- [x] **T022** `[P]` `data/snags.ts` — 2–3 cross-linked rows.
- [x] **T023** `[P]` `data/warranties.ts` — 2–3 cross-linked rows.
- [x] **T024** `[P]` `data/gallery.ts` — categories cross-linked to spaces/domains; references real image assets.

## Phase 3.5 — Image assets
- [x] **T025** Copy + optimize 8 elevation JPGs → `public/images/elevation/`; pick hero.
- [x] **T026** `brew install poppler`; extract renders from 3 PDFs (`pdfimages` / `pdftoppm`) → optimize → `public/images/spaces/` & `renders/` (curated subset).
- [x] **T027** Wire real image paths into `data/spaces.ts` + `data/gallery.ts`.

## Phase 3.6 — Verify
- [x] **T028** `scripts/verify-data.ts` + `"verify"` npm script; minimal `app/page.tsx` placeholder.
- [x] **T029** Run `npx tsc --noEmit`, `npm run verify`, `npm run build`; fix failures.

## Definition of done
1. `npx tsc --noEmit` clean (no `any`).
2. `npm run verify` → non-zero counts per entity + one resolved relation chain.
3. `npm run build` succeeds; placeholder renders with fonts + tokens.
4. `public/images` holds optimized elevations + extracted renders; seed paths resolve.
