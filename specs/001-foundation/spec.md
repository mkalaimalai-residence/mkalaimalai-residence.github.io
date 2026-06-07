# Feature Specification: 001 — Foundation

**Feature branch:** `feat/001-foundation`
**Status:** In progress
**Session:** A (Foundation) of A→B→C

## Summary

Lock the data model and real seed data for the Residence Project Website so that later features —
002 the public editorial site and 003 the private portal — build UI against a stable, typed,
referentially-consistent foundation. This feature builds **no** public or portal pages. It delivers
project scaffolding, theme tokens, all entity interfaces, an async repository + relations
data-access layer, real cross-referencing seed data, web-ready image assets, and a verification
harness.

## Why

The portal is a living tool with ~14 entities and dense cross-references (every artifact connects to
a space, domain, vendor, status, and decision). If UI work begins before the data model and seed are
locked, downstream pages drift and the cross-link graph rots. Establishing the contract first makes
B and C purely additive.

## User scenarios & testing

### Primary user stories
- **As a Session B/C developer**, I can call `getSpaces()` / `getSpaceBySlug(slug)` and receive
  typed objects, then resolve their `vendorIds` / `drawingIds` / `decisionIds` to full records via
  `lib/relations` — so I build UI without ever touching raw data files.
- **As the homeowner**, the seeded content reflects my actual project (real rooms and design intents,
  real vendors and quotes, the home-automation decision, captured lessons) so the site is useful on
  day one rather than full of placeholders.

### Acceptance scenarios (Given / When / Then)
1. **Given** the foundation is built, **When** `npm run verify` runs, **Then** it prints a non-zero
   count for every entity and a fully resolved sample relation chain (master-bedroom → vendor /
   drawing / decision names).
2. **Given** strict TypeScript, **When** `npx tsc --noEmit` runs, **Then** it passes with zero
   `any`.
3. **Given** any space row, **When** its `domainIds` are resolved, **Then** every id matches an
   existing `Domain` (referential integrity holds across the seed).
4. **Given** the gallery seed, **When** each image path is followed, **Then** it points at a real
   file under `public/images`.
5. **Given** the app, **When** `npm run build` runs and `app/page.tsx` renders, **Then** the
   placeholder shows with the serif/sans fonts and theme tokens applied.

## Requirements (functional)

- **FR1** — Define all 14 entity interfaces with exact union-literal status fields and `*Ids`
  relations (per build doc §7), including `Project` and `GalleryItem` (derived from their data files
  and usage).
- **FR2** — Provide an async repository (`lib/repository.ts`) with a getter per entity plus
  by-id / by-slug finders where pages need them.
- **FR3** — Provide synchronous relation resolvers (`lib/relations.ts`) that turn id arrays into
  typed objects.
- **FR4** — Seed every entity with ≥2–3 fully populated rows whose IDs cross-reference correctly.
- **FR5** — Define theme tokens (palette + serif/sans fonts) once as CSS variables mapped into the
  Tailwind theme.
- **FR6** — Produce web-ready images: copy the elevation JPGs and extract interior renders from the
  PDFs; wire real paths into `spaces` and `gallery` seed.
- **FR7** — Provide a verification harness (`scripts/verify-data.ts`, `npm run verify`) and a minimal
  placeholder `app/page.tsx`.

## Key entities

Project, Space, Domain, Drawing, Vendor, ProcurementItem, Decision, Snag, BOQ, Material, Lesson,
ProgressEntry, Warranty, GalleryItem.

## Outstanding clarifications

Marked `[NEEDS CLARIFICATION]` — non-blocking; seeded with realistic representative values and
`// TODO: confirm` markers until the homeowner supplies actuals:
- Exact painting / steel-staircase / lighting quote amounts.
- The 13 Italian furniture brand names and their EUR ex-works prices.
- KNX automation vendor final negotiated figures (kept deliberately out of seed per constitution §5).

## Out of scope

- All public routes and components, SEO, responsive layout — **Feature 002 (Session B)**.
- Auth middleware, portal shell, generic `DataTable<T>`, the Room Matrix and the 10 portal tables —
  **Feature 003 (Session C)**.

## Review checklist
- [ ] All entities have interfaces with ID-based relations.
- [ ] Repository is the only data entry point; nothing imports `data/` directly.
- [ ] Seed cross-references resolve (verified by `npm run verify`).
- [ ] `tsc --noEmit` clean, no `any`.
- [ ] Public-anonymization respected in seed.
- [ ] Image paths in seed resolve to real files.
