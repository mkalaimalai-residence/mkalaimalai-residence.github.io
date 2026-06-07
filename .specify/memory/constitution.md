# Constitution — Residence Project Website

These are the locked, non-negotiable principles for this project. Every feature (001-foundation,
002-public-site, 003-portal) must comply. Where a plan conflicts with the constitution, the
constitution wins.

## Principles

1. **Data model is the contract.**
   The interfaces in `types/` and the seed data in `data/` are locked once feature 001 lands.
   Later features (B/C) read them; they do not change the interfaces. Schema changes are their
   own feature with their own review.

2. **Repository boundary.**
   Pages and components import data **only** from `lib/repository` (all async). They never import
   from `data/` directly. This keeps the future swap to Supabase a mechanical change to one layer,
   with zero call-site edits.

3. **Relations by ID, never display name.**
   All cross-references between entities are `*Ids: string[]` (or a single `*Id: string`). They are
   resolved to full records at render time via `lib/relations`. A rename must never sever a link.

4. **TypeScript strict, no `any`.**
   `strict: true` is required and `tsc --noEmit` must pass clean. Prefer pure functions and minimal
   side effects. Colours and fonts come from theme tokens — never hardcoded hex in components.

5. **Public side stays anonymized.**
   The exact villa number and street address live only in portal-only seed fields. The public
   experience uses the anonymized title "A Contemporary Zen Residence in Bengaluru". Genuinely
   sensitive commercial figures (final negotiated prices, payment/account details) stay out of seed
   data until real auth exists.

6. **Real seed data.**
   Every entity ships with at least 2–3 fully populated rows whose IDs actually cross-reference each
   other, so relation resolution and filters are demonstrably working from day one. Placeholder rows
   that hide schema gaps are not acceptable.

## Component model (App Router)

Pages and detail views are Server Components by default. Any view with sort/filter/search state is a
Client Component (`"use client"`) that receives already-loaded, plain-serializable data as props.
Data fetching stays in the server/repository layer.

## Build sequencing

The project ships as three reviewed-and-committed sessions, in order:
A (Foundation) → B (Public site) → C (Portal). Do not one-shot across sessions.
