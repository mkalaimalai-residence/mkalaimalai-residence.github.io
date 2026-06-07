import type { GalleryItem } from "@/types";

/**
 * Curated gallery. Every `image` path must resolve to a real file under
 * `public/images` (elevation renders are copied; interior renders are extracted
 * from the project PDFs).
 */
export const gallery: GalleryItem[] = [
  {
    id: "gal-hero",
    title: "Street approach at dusk",
    category: "render",
    image: "/images/elevation/hero.jpg",
    spaceId: "",
    domainId: "dom-architecture",
    caption: "The three slatted volumes and the entry court at dusk.",
  },
  {
    id: "gal-aerial",
    title: "Aerial — courtyard & pool",
    category: "render",
    image: "/images/elevation/aerial.jpg",
    spaceId: "sp-courtyard",
    domainId: "dom-architecture",
    caption: "The reflecting pool and frangipani at the heart of the plan.",
  },
  {
    id: "gal-north",
    title: "North elevation",
    category: "render",
    image: "/images/elevation/north.jpg",
    spaceId: "",
    domainId: "dom-architecture",
    caption: "Board-formed concrete against the teak slat screens.",
  },
  {
    id: "gal-rear",
    title: "Rear garden & terrace",
    category: "landscape",
    image: "/images/elevation/front-aerial.jpg",
    spaceId: "sp-terrace",
    domainId: "dom-landscape",
    caption: "Pergola dining and the layered garden edge.",
  },
  {
    id: "gal-living",
    title: "Living room",
    category: "render",
    image: "/images/spaces/living-room.jpg",
    spaceId: "sp-living",
    domainId: "dom-interior",
    caption: "Double-height living opening to the water court.",
  },
  {
    id: "gal-dining",
    title: "Dining",
    category: "render",
    image: "/images/spaces/dining.jpg",
    spaceId: "sp-dining",
    domainId: "dom-interior",
    caption: "Statement table under a quiet pendant.",
  },
  {
    id: "gal-master",
    title: "Master bedroom",
    category: "render",
    image: "/images/spaces/master-bedroom.jpg",
    spaceId: "sp-master",
    domainId: "dom-interior",
    caption: "Teak headboard wall and a glazed corner to the canopy.",
  },
  {
    id: "gal-multipurpose",
    title: "Multipurpose room",
    category: "render",
    image: "/images/spaces/multipurpose.jpg",
    spaceId: "sp-multipurpose",
    domainId: "dom-interior",
    caption: "Top-floor media, bar and games room under the gable.",
  },
];
