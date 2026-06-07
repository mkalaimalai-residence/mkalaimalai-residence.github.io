# A Contemporary Zen Residence — Design & Construction Archive

A two-part web application documenting the design and construction of a family home in
Bengaluru:

- **A public, editorial case-study site** — a polished portfolio of the vision, spaces,
  domains, materials, build journey, gallery and lessons.
- **A private portal** (in progress) — a practical control center for drawings, the room
  matrix, vendors, BOQs, procurement, decisions, progress, snags and warranties.

> **Public vs. private.** The public site is intentionally **anonymized** — it never shows
> the exact villa number or address. The precise locating identifiers are **redacted in
> this public repository** and live only in portal-only data fields (injected privately).
> The home was designed by *Studio Anagami*.

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict, no `any`) |
| Styling | Tailwind CSS v4 (CSS-first theme tokens) |
| UI helpers | shadcn-compatible config + `cn`, lucide-react icons |
| Fonts | Fraunces (serif headings) + Inter (sans body) via `next/font` |
| Data (MVP) | Local TypeScript modules in `data/`, read through a repository layer |
| Deploy target | Vercel |

There is **no database yet**. Seed data lives in typed TS modules and is read through an
async repository so it can later be swapped for Supabase with zero changes to page code.

---

## How it's built — three sessions

The project is delivered in three reviewed, sequenced phases. Specs for each live under
`specs/` in GitHub Spec Kit format, and the locked rules live in
`.specify/memory/constitution.md`.

| Session | Scope | Status |
|---|---|---|
| **A — Foundation** | Data model, repository + relations layer, real seed data, theme tokens, images | ✅ Done |
| **B — Public site** | All public routes, components, navigation, cross-links | ✅ Done |
| **C — Portal** | Server-side auth gate, portal shell, Room Matrix, 10 data tables | ⬜ Not started |

---

## Architecture in one picture

```
              data/*.ts                 lib/repository.ts            app/**/page.tsx
        (typed seed modules)   ──▶   (async getters — the ONLY  ──▶  (Server Components
         spaces, domains,             data entry point)               render the data)
         vendors, …, gallery                 │
                                             ▼
                                     lib/relations.ts
                              (resolve *Ids → full records
                               at render time, e.g. a space's
                               vendorIds → Vendor objects)
```

**Three rules that hold everywhere** (see the constitution):

1. **The repository is the only data door.** Pages import from `lib/repository`, never from
   `data/` directly. Swapping to a real backend later means rewriting one file.
2. **Relations are by ID, never by name.** Every cross-reference is an `*Ids: string[]`
   field, resolved through `lib/relations`. Renaming a vendor never breaks a link.
3. **Only render a link if its public page exists.** Spaces, domains, lessons and gallery
   have public pages, so they're clickable. Vendors, drawings and decisions are
   portal-domain, so they appear as read-only chips — which is why **no public link 404s**.

---

## Project structure

```
app/                     # routes (App Router)
  page.tsx               #   /          home (hero, snapshot, explore sections)
  vision/                #   /vision    design philosophy
  spaces/                #   /spaces    grid  +  [slug]/  room detail
  domains/               #   /domains   grid  +  [slug]/  discipline detail
  materials/             #   /materials filterable material library
  journey/               #   /journey   13-stage build timeline
  gallery/               #   /gallery   filterable image grid
  lessons/               #   /lessons   learnings with impact tags
  portal/                #   /portal    placeholder until Session C
  layout.tsx             #   header + footer + fonts + theme
  globals.css            #   theme tokens (palette + fonts)

components/              # SiteHeader, SiteFooter, SpaceCard, DomainCard, MaterialCard,
                         # GalleryGrid, MaterialsLibrary, Timeline, StatusBadge, Chip, …
types/index.ts           # all 14 entity interfaces — the data contract
lib/
  repository.ts          # async getX() per entity (the single data entry point)
  relations.ts           # byIds / single-id resolvers
  utils.ts               # cn, formatINR, landedFromEUR
  nav.ts                 # public navigation links
data/                    # 14 typed seed modules (real project data)
scripts/verify-data.ts   # data + relations integrity check (npm run verify)
public/images/           # elevation/ (exterior renders) + spaces/ (interior renders)
artifacts/               # original source assets (renders, PDFs) — not web-served
specs/ , .specify/       # Spec Kit specs + project constitution
```

---

## The data model (14 entities)

Defined in `types/index.ts`, seeded in `data/`:

`Project`, `Space`, `Domain`, `Drawing`, `Vendor`, `ProcurementItem`, `Decision`, `Snag`,
`BOQ`, `Material`, `Lesson`, `ProgressEntry`, `Warranty`, `GalleryItem`.

They cross-reference each other by ID — e.g. the **Master Bedroom** space links to its
domains, materials, vendors (Italian furniture house, Sync Technologies), drawings, the
home-automation decision, and a lesson. The site resolves those links at render time.

Some figures (exact quotes, the Italian furniture brand names) are realistic placeholders
marked `// TODO: confirm`; genuinely sensitive numbers are deliberately kept out of seed
data until real auth exists.

---

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:3000
```

Other scripts:

```bash
npm run verify     # check seed data: entity counts, referential integrity, image paths
npm run typecheck  # tsc --noEmit (strict)
npm run build      # production build (statically generates every space & domain page)
npm run lint       # eslint
```

`npm run verify` is the quickest way to confirm the data layer is healthy — it prints a
count for every entity, checks that all `*Ids` references resolve, confirms image paths
exist, and walks one full relation chain (Master Bedroom → its vendors/drawings/decisions).

---

## Updating content

Because there's no CMS yet, content updates are edits to `data/*.ts` followed by a redeploy:

- Add a room → add a row to `data/spaces.ts` (and reference real images in `public/images/`).
- Update procurement/snags/progress → edit the matching module.
- Always run `npm run verify` afterwards to catch broken cross-references.

When the portal (Session C) and a real backend land, this same repository interface stays —
only `lib/repository.ts` changes.

---

## Images

Exterior renders are in `public/images/elevation/`; interior renders were extracted from the
design PDFs in `artifacts/` into `public/images/spaces/`. One note: `bathroom.jpg` is a
dressing-room stand-in — there is no dedicated bathroom render in the source material yet.
