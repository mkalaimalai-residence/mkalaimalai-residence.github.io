# Residence Project Website — Build Plan for Claude Code

> **How to use this document.** Do **not** paste this whole file and ask for "the MVP" in one go — it spans two distinct apps (an editorial site + a dashboard), ~13 entities, ~25 routes, and ~22 components. One-shotting it produces broad-but-shallow scaffolding that loses coherence partway through. Instead, run it as **three sequenced Claude Code sessions** (see §0). Lock the data model and seed data before any UI is built; everything downstream keys off them.

---

## 0. Build Sequence (read first)

Run these as separate sessions. Review and commit each before starting the next.

| Session | Scope | Exit criteria |
|---|---|---|
| **A — Foundation** | Project setup, theme tokens, all TypeScript interfaces, the data-access layer (§7), and real seed data (§11). No UI pages yet. | `tsc` passes, seed data loads, relation helpers resolve IDs to names. |
| **B — Public site** | All public routes (§5), public components, responsive + SEO. | Every public page renders from seed data with working cross-links. |
| **C — Private portal** | Auth (§6.0), portal shell, all portal tables (§6.1–6.10). | Portal gated server-side; all tables sort/filter/render. |

When starting Session B or C, tell Claude Code: *"The data model and seed data in `/data` and `/lib` are locked. Read them first; do not change the interfaces — build UI against them."*

---

## 1. Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript (strict mode)
* **Styling:** Tailwind CSS
* **UI:** shadcn/ui
* **Icons:** Lucide React
* **Data (MVP):** local TypeScript modules in `/data`, read through a repository layer (§7.0)
* **Auth (MVP):** server-side password gate via middleware (§6.0) — **obscurity, not security**
* **Deployment:** Vercel

**Component model (App Router — important):** Pages and detail views are **Server Components** by default. Any table or view with sort/filter/search state must be a **Client Component** (`"use client"`) that receives already-loaded data as props. Keep data fetching in the server layer; pass plain serializable objects down. This avoids hydration friction and keeps the Supabase swap (§15) trivial.

---

## 2. Concept

**Public-facing name:** "A Contemporary Zen Residence in Bengaluru"
**Subtitle:** "A complete design and construction archive of a family home — from concept and drawings to materials, craftsmanship, automation, furniture, and final handover."

> **Privacy note.** The internal project is *the residence (locating identifiers redacted)*, designed by *Studio Anagami*. Keep the exact villa number and address **out of the public site** — use them only in the gated portal and in private seed data. The public side stays anonymized.

Two experiences:
* **Public:** a polished portfolio/case-study showcasing vision, architecture, interiors, materials, lighting, landscape, automation, build journey, gallery, lessons.
* **Private (`/portal`):** a practical control center for drawings, room matrix, vendors, BOQs, procurement, decisions, progress, snags, warranties.

---

## 3. Design Direction

Warm minimal, contemporary, premium, calm, architectural, editorial, highly visual.

* **Palette:** warm white (bg), ivory (surface), stone grey (muted), soft beige (accent), charcoal (text), soft grey (border).
* **Type:** refined serif for large headings; clean sans-serif for body and dashboards.
* **Public layout:** large image-led sections, generous whitespace, card navigation, narrow text columns, section dividers.
* **Portal layout:** dense, functional dashboards — left sidebar, sortable tables, status badges, summary cards, search + filters. Compact spacing.

Define tokens once in the Tailwind theme / CSS variables; avoid one-off hardcoded colors.

---

## 7. Data Model (do this first, in Session A)

### 7.0 Data-access layer — the most important architectural decision

This portal is a **living tool** you'll update weekly (procurement status, snags, progress photos), not just a static showcase. Editing `/data/*.ts` and redeploying is acceptable for the MVP, but **do not let pages read the `/data` arrays directly.** Put a thin repository layer in front so swapping to Supabase later is mechanical, not a rewrite.

Create `/lib/repository.ts` exposing async functions only:

```ts
// All reads go through here. MVP impl reads /data modules.
// Later impl hits Supabase — call sites never change.
export async function getSpaces(): Promise<Space[]> { ... }
export async function getSpaceBySlug(slug: string): Promise<Space | null> { ... }
export async function getVendors(): Promise<Vendor[]> { ... }
export async function getProcurement(): Promise<ProcurementItem[]> { ... }
// ...one per entity, all async, returning typed objects
```

Pages/components import from `/lib/repository`, **never** from `/data` directly.

### 7.1 Relations use IDs, not display-name strings

The original spec referenced related records by display name (e.g. `vendors: ["Placeholder Furniture Vendor"]`). That breaks UX principle "every artifact connects to a room, domain, vendor, status, decision" — one rename silently severs the link. **All cross-references are ID arrays**, resolved to names at render time via `/lib/relations.ts`:

```ts
// /lib/relations.ts
export function vendorsByIds(ids: string[], all: Vendor[]): Vendor[]
export function spacesByIds(ids: string[], all: Space[]): Space[]
export function domainsByIds(ids: string[], all: Domain[]): Domain[]
export function drawingsByIds(ids: string[], all: Drawing[]): Drawing[]
// ...etc. Each filters the source array by id membership.
```

### Files in `/data`
`project.ts`, `spaces.ts`, `domains.ts`, `materials.ts`, `drawings.ts`, `vendors.ts`, `procurement.ts`, `decisions.ts`, `progress.ts`, `snags.ts`, `warranties.ts`, `lessons.ts`, `gallery.ts`.

### Interfaces (note `*Ids` fields everywhere)

```ts
export interface Space {
  id: string;
  slug: string;
  name: string;
  description: string;
  designIntent: string;
  image: string;
  domainIds: string[];
  materialIds: string[];
  furniture: string[];          // free text is fine — not a linked entity
  lighting: string[];
  vendorIds: string[];
  drawingIds: string[];
  decisionIds: string[];
  status: "Concept" | "Design" | "Execution" | "Completed";
  lessonIds: string[];
}

export interface Domain {
  id: string;
  slug: string;
  name: string;
  description: string;
  spaceIds: string[];
  drawingIds: string[];
  vendorIds: string[];
  status: "Not Started" | "In Progress" | "Approved" | "Completed";
  lessonIds: string[];
}

export interface Drawing {
  id: string;
  title: string;
  domainId: string;
  spaceId: string;              // "" if not room-specific
  revision: string;
  date: string;                 // ISO yyyy-mm-dd
  status: "Draft" | "For Review" | "Approved" | "Superseded" | "Issued for Construction";
  consultant: string;
  fileUrl: string;
  notes: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  contactPerson: string;
  phone: string;
  email: string;
  location: string;
  website: string;
  quoteUrl: string;
  finalized: boolean;
  rating: number;               // 0–5
  notes: string;
}

export interface ProcurementItem {
  id: string;
  item: string;
  category: string;
  spaceId: string;
  brand: string;
  vendorId: string;
  country: string;
  quantity: number;
  estimatedPrice: number;       // store INR as numbers; format at render
  quotedPrice: number;
  negotiatedPrice: number;
  finalPrice: number;
  currency: "INR" | "EUR" | "USD";
  status: "Identified" | "Quoted" | "Negotiating" | "Ordered" | "Shipped" | "Delivered" | "Installed" | "Closed";
  deliveryDate: string;
  installationDate: string;
  warranty: string;
  notes: string;
}

export interface Decision {
  id: string;
  title: string;
  domainId: string;
  spaceId: string;
  type: "Design" | "Material" | "Vendor" | "Cost" | "Technical" | "Schedule" | "Quality";
  optionsConsidered: string[];
  finalDecision: string;
  reason: string;
  costImpact: string;
  timeImpact: string;
  qualityImpact: string;
  date: string;
  owner: string;
  status: "Open" | "Decided" | "Revisit" | "Closed";
}

export interface Snag {
  id: string;
  spaceId: string;
  category: string;
  description: string;
  photoUrl: string;
  assignedTo: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Fixed" | "Verified" | "Closed";
  targetClosureDate: string;
  actualClosureDate: string;
  notes: string;
}

export interface BOQ {
  id: string;
  vendorId: string;
  category: string;
  quoteDate: string;
  originalAmount: number;
  negotiatedAmount: number;
  gst: number;
  total: number;
  paymentStatus: "Unpaid" | "Advance Paid" | "Part Paid" | "Fully Paid";
  fileUrl: string;
  notes: string;
}

export interface Material {
  id: string;
  name: string;
  category: string;
  spaceIds: string[];
  vendorId: string;
  status: string;
  image: string;
  notes: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  summary: string;
  domainId: string;
  spaceId: string;
  impact: { cost: string; time: string; quality: string; design: string };
}

export interface ProgressEntry {
  id: string;
  date: string;
  phase: string;
  spaceId: string;
  workCompleted: string;
  photos: string[];
  issues: string;
  nextAction: string;
  owner: string;
  status: string;
}

export interface Warranty {
  id: string;
  item: string;
  category: string;
  vendorId: string;
  brand: string;
  purchaseDate: string;
  warrantyStart: string;
  warrantyEnd: string;
  invoiceUrl: string;
  manualUrl: string;
  serviceContact: string;
  notes: string;
}
```

---

## 6.0 Auth — server-side, and what it actually protects

A client-side `PORTAL_PASSWORD` check is trivially bypassable, and this portal holds vendor contacts, negotiated prices, payment status, and BOQs — real commercial data. For the MVP:

* Gate the entire `/portal/*` tree in **Next.js middleware** (server-side), checking a signed cookie set after a server-validated password POST. **Never** ship the password to the client or read `process.env.PORTAL_PASSWORD` in a Client Component.
* Treat this as **obscurity, not security.** Until real auth (§15) lands, keep genuinely sensitive figures (exact final negotiated prices, payment account details) out of seed data, or behind a feature flag.
* `PasswordGate` is the login UI only; the actual enforcement is the middleware.

---

## 4. Navigation
Vision · Spaces · Domains · Drawings · Materials · Vendors · Journey · Gallery · Lessons · **Private Portal**. Hamburger on mobile.

---

## 5. Public Sitemap
*(unchanged in structure from the original — kept for reference)*

* `/` — Home: hero, project snapshot, design vision, explore-by-spaces, explore-by-domains, journey timeline, featured stories, footer.
* `/vision` — philosophy, lifestyle goals, site/climate response, indoor-outdoor, courtyard, material & light, smart-home.
* `/spaces` and `/spaces/[slug]` — room grid → detail (intent, images, related drawings, palette, furniture, lighting, automation scenes, vendors, decisions, lessons). Slugs: living-room, dining, kitchen, master-bedroom, bedroom-2, bedroom-3, bathrooms, courtyard, terrace, landscape.
* `/domains` and `/domains/[slug]` — domain cards → detail (overview, drawings, decisions, vendors, related spaces, status, lessons). Slugs: architecture, interior-design, civil-structure, plumbing, electrical, lighting, false-ceiling, carpentry, flooring, furniture, landscape, home-automation, procurement, project-management.
* `/materials` — filterable material library.
* `/journey` — vertical timeline, 13 stages (concept → handover).
* `/gallery` — filterable grid (renders, drawings, progress, final, materials, furniture, lighting, landscape).
* `/lessons` — blog-style cards with impact tags.

All public detail pages resolve relations via `/lib/relations.ts` and render linked records as clickable chips/cards.

---

## 6. Private Portal Sitemap
`/portal` (dashboard), `/portal/drawings`, `/room-matrix`, `/vendors`, `/procurement`, `/boq`, `/decisions`, `/progress`, `/snags`, `/warranties`.

* **Dashboard cards:** total drawings, open decisions, active vendors, pending procurement, open snags, upcoming payments, recent updates — all computed from the repository, not hardcoded.
* **Room Matrix** (`/portal/room-matrix`) is the keystone page: one row per space, columns for flooring / wall / ceiling / lighting / furniture / automation / plumbing / electrical / vendors / status / notes.
* Each table: client component, sortable, filterable, with `StatusBadge` and shadcn table primitives. Field lists and status enums are defined by the interfaces in §7 — derive filter options from the enums, don't re-type them.

---

## 8. Components (`/components`)
`SiteHeader`, `SiteFooter`, `HeroSection`, `ProjectSnapshot`, `SectionHeading`, `SpaceCard`, `DomainCard`, `MaterialCard`, `GalleryGrid`, `Timeline`, `StatusBadge`, `DataTable` (generic, typed via generics), `FilterBar`, `PortalShell`, `PortalSidebar`, `DashboardMetricCard`, `DrawingTable`, `VendorTable`, `ProcurementTable`, `DecisionTable`, `SnagTable`, `PasswordGate`.

Build `DataTable<T>` once as a generic and have the entity-specific tables configure columns, rather than five near-duplicate table components.

---

## 11. Seed Data — use REAL project data

Placeholder rows make the MVP feel hollow and hide schema gaps. Seed with actual material so it's useful on day one:

* **Project:** the residence (locating identifiers redacted); designer Studio Anagami; contemporary-minimalist direction. *(Internal/portal only — anonymized on public side.)*
* **Spaces:** real room set with the design intents you've already articulated.
* **Vendors / BOQ:** the painting and steel-staircase-fabrication quotes; lighting quotation line items.
* **Procurement:** Italy furniture sourcing (the 13 brands, EUR ex-works with ~1.7–1.8× landed multiplier — use `currency: "EUR"` and let render-time conversion/markup show landed INR), Turkey furniture items.
* **Decisions:** home automation — *Sync Technologies (KNX/BAB)* vs *Home Theatre Plus (KNX/Control4)*, with the options-considered and reasoning captured.
* **Lessons:** the negotiation and hidden-cost learnings from the automation comparison and contractor quotes.

Provide at least 2–3 fully populated, internally-consistent rows per entity (IDs that actually cross-reference each other) so relation resolution and filters are demonstrably working.

---

## 12–13. Tokens & UX Principles
Theme tokens per §3. Core principles: public = premium case study; portal = control center; every artifact links to space/domain/vendor/status/decision **by ID**; organize by spaces/domains/timeline/decisions, not by files; useful before final photos via placeholders; all data behind the repository layer for a clean Supabase swap.

---

## 14. Definition of Done (MVP)
Working Next.js app; all public pages rendering real seed data with live cross-links; server-side-gated portal with all ten modules; generic `DataTable`; repository + relations layer; responsive; SEO metadata on public pages; `tsc --strict` clean.

---

## 15. Future Enhancements (architect for, don't build)
Supabase (swap repository impl only), real auth + roles, file upload, Google Drive integration, AI search over drawings/notes, PDF preview, interactive floor plan, QR-per-room, maintenance calendar, budget dashboard, Excel export, public content hub.