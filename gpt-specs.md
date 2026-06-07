# Residence Project Website Build Plan for Claude Code

## Goal

Build a professional website for documenting and showcasing a private residence project. The website should work as both:

1. A beautiful public architecture and interior design case study.
2. A private project documentation portal for drawings, vendors, BOQs, decisions, progress photos, procurement, snags, and warranties.

The project should feel like a premium architecture portfolio combined with a structured construction management dashboard.

---

# 1. Recommended Tech Stack

Use the following stack:

* Framework: Next.js with App Router
* Language: TypeScript
* Styling: Tailwind CSS
* UI Components: shadcn/ui
* Icons: Lucide React
* Content Storage for MVP: Local JSON / Markdown files
* Future Database Option: Supabase or PostgreSQL
* File Storage for MVP: Public folder or external Google Drive links
* Authentication for Private Portal: Basic password-protected section for now
* Deployment: Vercel

The first version should be clean, fast, static-friendly, and easy to expand later.

---

# 2. Website Concept

Website name:

“A Contemporary Zen Residence in Bengaluru”

Subtitle:

“A complete design and construction archive of a family home, from concept and drawings to materials, craftsmanship, automation, furniture, and final handover.”

The website should have two major experiences:

## Public Experience

A polished portfolio-style website that showcases:

* Design vision
* Architecture
* Interiors
* Materials
* Lighting
* Landscape
* Smart home automation
* Build journey
* Gallery
* Lessons learned

## Private Experience

A password-protected project portal that manages:

* Drawing register
* Room matrix
* Vendor library
* BOQs and quotes
* Procurement tracker
* Decision log
* Progress photos
* Snag list
* Warranty and handover files

---

# 3. Design Direction

The design should feel:

* Warm minimal
* Contemporary
* Premium
* Calm
* Architectural
* Editorial
* Highly visual
* Structured and professional

Use a palette inspired by:

* Warm white
* Ivory
* Stone grey
* Soft beige
* Charcoal text
* Muted wood tones

Typography:

* Use a refined serif font for large headings
* Use a clean sans-serif font for body text and dashboards

Layout principles:

* Large image-led sections
* Plenty of whitespace
* Card-based navigation
* Clean tables for project data
* Domain and room-based organization
* Simple navigation
* Search and filtering in private sections

---

# 4. Main Navigation

Create this top-level navigation:

* Vision
* Spaces
* Domains
* Drawings
* Materials
* Vendors
* Journey
* Gallery
* Lessons
* Private Portal

On mobile, collapse into a clean hamburger menu.

---

# 5. Public Website Sitemap

Create the following public pages.

## 5.1 Home Page

Route: `/`

Sections:

1. Hero section

   * Full-width render or placeholder image
   * Title: A Contemporary Zen Residence in Bengaluru
   * Subtitle: A complete design and construction archive of a family home
   * CTA buttons:

     * Explore the Project
     * View Build Journey

2. Project snapshot

   * Location: Bengaluru, India
   * Project type: Private residence
   * Design style: Contemporary Zen / Warm Minimal / Japandi-inspired
   * Status: Under construction / Final finishing phase
   * Floors: Placeholder
   * Built-up area: Placeholder
   * Completion target: Placeholder

3. Design vision

   * Short paragraph about warm minimalism, indoor-outdoor living, courtyard, natural light, craftsmanship, and automation.

4. Explore by spaces
   Cards for:

   * Living Room
   * Dining
   * Kitchen
   * Master Bedroom
   * Bedrooms
   * Bathrooms
   * Courtyard
   * Terrace
   * Landscape

5. Explore by domains
   Cards for:

   * Architecture
   * Interiors
   * Civil and Structure
   * Plumbing
   * Electrical
   * Lighting
   * Ceiling
   * Carpentry
   * Flooring
   * Furniture
   * Automation
   * Landscape

6. Build journey timeline

   * Concept
   * Design development
   * Civil construction
   * MEP
   * Finishes
   * Furniture and styling
   * Handover

7. Featured stories
   Cards:

   * The Courtyard as the Heart of the Home
   * How Lighting Defines the Mood
   * Furniture Sourcing from Italy and Turkey
   * Lessons Learned from Building a Custom Home

8. Footer

   * Project name
   * Copyright
   * Contact placeholder

---

## 5.2 Vision Page

Route: `/vision`

Sections:

* Design philosophy
* Lifestyle goals
* Inspiration references
* Climate and site response
* Indoor-outdoor connection
* Courtyard and landscape idea
* Material and light philosophy
* Smart home philosophy

---

## 5.3 Spaces Page

Route: `/spaces`

Show a grid of room cards.

Each room card should include:

* Room name
* Short description
* Hero image placeholder
* Tags:

  * Architecture
  * Interior
  * Lighting
  * Furniture
  * Materials

Create detail route:

`/spaces/[slug]`

Each space detail page should include:

1. Hero image
2. Design intent
3. Render vs progress vs final image placeholders
4. Drawings related to the room
5. Material palette
6. Furniture list
7. Lighting plan
8. Automation scenes
9. Vendors and products
10. Decisions and lessons learned

Initial room slugs:

* living-room
* dining
* kitchen
* master-bedroom
* bedroom-2
* bedroom-3
* bathrooms
* courtyard
* terrace
* landscape

---

## 5.4 Domains Page

Route: `/domains`

Show domain cards.

Create detail route:

`/domains/[slug]`

Initial domain slugs:

* architecture
* interior-design
* civil-structure
* plumbing
* electrical
* lighting
* false-ceiling
* carpentry
* flooring
* furniture
* landscape
* home-automation
* procurement
* project-management

Each domain detail page should include:

1. Domain overview
2. Key drawings
3. Key decisions
4. Vendors
5. Related spaces
6. BOQ or cost placeholders
7. Status
8. Lessons learned

---

## 5.5 Materials Page

Route: `/materials`

Create a material library with cards.

Material categories:

* Flooring
* Wall finishes
* Ceiling finishes
* Wood and veneer
* Stone
* Metal
* Glass
* Paint
* Fabric
* Hardware
* Outdoor materials

Each material card should include:

* Material name
* Category
* Used in rooms
* Supplier
* Status
* Image placeholder
* Notes

---

## 5.6 Journey Page

Route: `/journey`

Create a visual timeline.

Timeline stages:

1. Concept and inspiration
2. Architectural design
3. Structural development
4. Civil construction
5. MEP coordination
6. Flooring and wall finishes
7. Ceiling and lighting
8. Carpentry
9. Furniture sourcing
10. Landscape
11. Automation
12. Final styling
13. Handover

Each stage should include:

* Date placeholder
* Summary
* Photos
* Decisions
* Issues
* Lessons learned

---

## 5.7 Gallery Page

Route: `/gallery`

Create filterable gallery.

Filters:

* Renders
* Drawings
* Progress photos
* Final photos
* Materials
* Furniture
* Lighting
* Landscape

Use image placeholders for now.

---

## 5.8 Lessons Page

Route: `/lessons`

Create a blog-style page for lessons learned.

Categories:

* Design decisions
* Vendor management
* Budgeting
* Imported furniture
* Lighting
* Carpentry
* Plumbing and electrical
* Automation
* Mistakes to avoid
* Negotiation learnings

Each lesson card should include:

* Title
* Category
* Short summary
* Related domain
* Related room
* Impact:

  * Cost
  * Time
  * Quality
  * Design

---

# 6. Private Portal Sitemap

Create a password-protected section at:

`/portal`

For MVP, use a simple password gate. Store the password as an environment variable:

`PORTAL_PASSWORD`

If no authentication is configured, show a placeholder login page.

Private portal pages:

* `/portal`
* `/portal/drawings`
* `/portal/room-matrix`
* `/portal/vendors`
* `/portal/procurement`
* `/portal/boq`
* `/portal/decisions`
* `/portal/progress`
* `/portal/snags`
* `/portal/warranties`

---

## 6.1 Portal Home

Route: `/portal`

Create dashboard cards:

* Total drawings
* Open decisions
* Active vendors
* Pending procurement
* Open snags
* Upcoming payments
* Recent updates

Also show quick links to all portal modules.

---

## 6.2 Drawing Register

Route: `/portal/drawings`

Create a table with filters.

Fields:

* Drawing ID
* Title
* Domain
* Room
* Revision
* Date
* Status
* Consultant
* File link
* Notes

Statuses:

* Draft
* For review
* Approved
* Superseded
* Issued for construction

Filters:

* Domain
* Room
* Status
* Revision
* Consultant

---

## 6.3 Room Matrix

Route: `/portal/room-matrix`

Create a table with one row per room.

Fields:

* Room
* Flooring
* Wall finish
* Ceiling finish
* Lighting
* Furniture
* Automation
* Plumbing
* Electrical
* Vendors
* Status
* Notes

This is one of the most important pages.

---

## 6.4 Vendor Library

Route: `/portal/vendors`

Create vendor cards and a table.

Fields:

* Vendor name
* Category
* Contact person
* Phone
* Email
* Location
* Website
* Quote link
* Finalized
* Rating
* Notes

Categories:

* Architect
* Structural consultant
* Plumbing
* Electrical
* Lighting
* Carpentry
* Flooring
* Furniture
* Landscape
* Automation
* Appliances
* Painting
* Stone
* Glass

---

## 6.5 Procurement Tracker

Route: `/portal/procurement`

Fields:

* Item
* Category
* Room
* Brand
* Vendor
* Country
* Quantity
* Estimated price
* Quoted price
* Negotiated price
* Final price
* Status
* Delivery date
* Installation date
* Warranty
* Notes

Statuses:

* Identified
* Quoted
* Negotiating
* Ordered
* Shipped
* Delivered
* Installed
* Closed

---

## 6.6 BOQ and Quote Tracker

Route: `/portal/boq`

Fields:

* BOQ ID
* Vendor
* Category
* Quote date
* Original amount
* Negotiated amount
* GST
* Total
* Payment status
* File link
* Notes

---

## 6.7 Decision Log

Route: `/portal/decisions`

Fields:

* Decision ID
* Title
* Domain
* Room
* Decision type
* Options considered
* Final decision
* Reason
* Cost impact
* Time impact
* Quality impact
* Date
* Owner
* Status

Decision types:

* Design
* Material
* Vendor
* Cost
* Technical
* Schedule
* Quality

---

## 6.8 Progress Tracker

Route: `/portal/progress`

Create a timeline and photo log.

Fields:

* Date
* Phase
* Room
* Work completed
* Photos
* Issues
* Next action
* Owner
* Status

---

## 6.9 Snag List

Route: `/portal/snags`

Fields:

* Snag ID
* Room
* Category
* Description
* Photo
* Assigned to
* Priority
* Status
* Target closure date
* Actual closure date
* Notes

Priority:

* Low
* Medium
* High
* Critical

Status:

* Open
* In progress
* Fixed
* Verified
* Closed

---

## 6.10 Warranty and Handover Files

Route: `/portal/warranties`

Fields:

* Item
* Category
* Vendor
* Brand
* Purchase date
* Warranty start
* Warranty end
* Invoice link
* Manual link
* Service contact
* Notes

---

# 7. Data Model

Create local seed data files inside:

`/data`

Files:

* `project.ts`
* `spaces.ts`
* `domains.ts`
* `materials.ts`
* `drawings.ts`
* `vendors.ts`
* `procurement.ts`
* `decisions.ts`
* `progress.ts`
* `snags.ts`
* `warranties.ts`
* `lessons.ts`
* `gallery.ts`

Use TypeScript interfaces.

---

## 7.1 Space Interface

```ts
export interface Space {
  id: string;
  slug: string;
  name: string;
  description: string;
  designIntent: string;
  image: string;
  domains: string[];
  materials: string[];
  furniture: string[];
  lighting: string[];
  vendors: string[];
  status: "Concept" | "Design" | "Execution" | "Completed";
  lessons: string[];
}
```

---

## 7.2 Domain Interface

```ts
export interface Domain {
  id: string;
  slug: string;
  name: string;
  description: string;
  relatedSpaces: string[];
  keyDrawings: string[];
  vendors: string[];
  status: "Not Started" | "In Progress" | "Approved" | "Completed";
  lessons: string[];
}
```

---

## 7.3 Drawing Interface

```ts
export interface Drawing {
  id: string;
  title: string;
  domain: string;
  room: string;
  revision: string;
  date: string;
  status: "Draft" | "For Review" | "Approved" | "Superseded" | "Issued for Construction";
  consultant: string;
  fileUrl: string;
  notes: string;
}
```

---

## 7.4 Vendor Interface

```ts
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
  rating: number;
  notes: string;
}
```

---

## 7.5 Procurement Interface

```ts
export interface ProcurementItem {
  id: string;
  item: string;
  category: string;
  room: string;
  brand: string;
  vendor: string;
  country: string;
  quantity: number;
  estimatedPrice: number;
  quotedPrice: number;
  negotiatedPrice: number;
  finalPrice: number;
  status: "Identified" | "Quoted" | "Negotiating" | "Ordered" | "Shipped" | "Delivered" | "Installed" | "Closed";
  deliveryDate: string;
  installationDate: string;
  warranty: string;
  notes: string;
}
```

---

## 7.6 Decision Interface

```ts
export interface Decision {
  id: string;
  title: string;
  domain: string;
  room: string;
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
```

---

## 7.7 Snag Interface

```ts
export interface Snag {
  id: string;
  room: string;
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
```

---

# 8. Components to Build

Create reusable components under:

`/components`

Required components:

* `SiteHeader`
* `SiteFooter`
* `HeroSection`
* `ProjectSnapshot`
* `SectionHeading`
* `SpaceCard`
* `DomainCard`
* `MaterialCard`
* `GalleryGrid`
* `Timeline`
* `StatusBadge`
* `DataTable`
* `FilterBar`
* `PortalShell`
* `PortalSidebar`
* `DashboardMetricCard`
* `DrawingTable`
* `VendorTable`
* `ProcurementTable`
* `DecisionTable`
* `SnagTable`
* `PasswordGate`

---

# 9. Page Layout Requirements

## Public pages

Use premium editorial design.

* Large top hero
* Clean breadcrumbs
* Large image blocks
* Minimal text width
* Section dividers
* Cards for related content
* Responsive design
* SEO metadata for each page

## Portal pages

Use dashboard-style layout.

* Left sidebar
* Top title area
* Search input
* Filters
* Sortable tables
* Status badges
* Summary cards
* Responsive table layout

---

# 10. MVP Build Order

Build in this order:

## Step 1: Project setup

* Create Next.js app with TypeScript
* Add Tailwind CSS
* Add shadcn/ui
* Add Lucide React
* Configure global styles
* Create layout and theme tokens

## Step 2: Seed data

Create all TypeScript data files with realistic placeholder data.

## Step 3: Public website

Build:

* Home page
* Vision page
* Spaces listing page
* Space detail page
* Domains listing page
* Domain detail page
* Materials page
* Journey page
* Gallery page
* Lessons page

## Step 4: Private portal

Build:

* Password gate
* Portal shell
* Portal dashboard
* Drawings table
* Room matrix table
* Vendors table
* Procurement table
* BOQ table
* Decisions table
* Progress page
* Snag table
* Warranty table

## Step 5: Polish

* Add responsive design
* Add hover states
* Add consistent spacing
* Add empty states
* Add placeholder images
* Add metadata
* Add basic search and filters
* Add status badges

---

# 11. Sample Seed Data

Create initial data for these spaces:

```ts
export const spaces = [
  {
    id: "space-001",
    slug: "living-room",
    name: "Living Room",
    description: "The main social space of the residence, designed around comfort, light, and indoor-outdoor continuity.",
    designIntent: "Create a calm, premium, warm minimal living space that connects visually to the courtyard and becomes the emotional center of the home.",
    image: "/images/placeholders/living-room.jpg",
    domains: ["Interior Design", "Lighting", "Furniture", "Automation"],
    materials: ["Stone flooring", "Warm wood veneer", "Textured wall finish"],
    furniture: ["Sofa", "Coffee table", "Accent chairs", "Console"],
    lighting: ["Cove lighting", "Wall washer", "Accent lights", "Decorative fixture"],
    vendors: ["Placeholder Furniture Vendor", "Placeholder Lighting Vendor"],
    status: "Execution",
    lessons: ["Finalize furniture layout before electrical point closure."]
  }
];
```

Create similar placeholder entries for:

* Dining
* Kitchen
* Master Bedroom
* Bedroom 2
* Bedroom 3
* Bathrooms
* Courtyard
* Terrace
* Landscape

---

# 12. Styling Tokens

Use these theme ideas:

```ts
colors:
  background: warm white
  surface: ivory
  muted: stone grey
  text: charcoal
  accent: warm beige
  border: soft grey

border radius:
  cards: 2xl

spacing:
  generous vertical spacing for public pages
  compact spacing for portal dashboards
```

Use Tailwind utility classes and avoid hardcoding too many one-off styles.

---

# 13. Important UX Principles

1. The public website should feel like a premium architecture case study.
2. The private portal should feel like a practical project control center.
3. Every artifact should connect to a room, domain, vendor, status, and decision.
4. Do not organize only by files. Organize by spaces, domains, timeline, and decisions.
5. Make the site useful even before final photos are available by using placeholders and progress images.
6. Make all major data editable later by isolating data into `/data` files.
7. Keep the code modular so Supabase can be added later.

---

# 14. Final Deliverables

The first version should include:

* Working Next.js website
* Public portfolio pages
* Private password-protected portal
* Seed data
* Reusable components
* Responsive layout
* Clean visual design
* Room-wise matrix
* Drawing register
* Vendor library
* Procurement tracker
* Decision log
* Snag tracker
* Warranty tracker
* Gallery
* Journey timeline

---

# 15. Future Enhancements

Design the code so the following can be added later:

* Supabase database
* User login and roles
* File upload
* Google Drive integration
* AI search across drawings and notes
* PDF preview
* Interactive floor plan
* QR code per room
* Maintenance calendar
* Vendor rating system
* Budget dashboard
* Export to Excel
* Public blog or YouTube content hub

```
```
