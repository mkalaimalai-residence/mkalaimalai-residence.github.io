import type { Project } from "@/types";

/**
 * Single project record.
 * Public-facing fields are anonymized (constitution §5). The villa number, community
 * and address are portal-only and must never surface on the public site.
 */
export const project: Project = {
  id: "proj-kr",

  // Public, anonymized identity
  publicTitle: "A Contemporary Zen Residence in Bengaluru",
  publicSubtitle:
    "A complete design and construction archive of a family home — from concept and drawings to materials, craftsmanship, automation, furniture, and final handover.",
  city: "Bengaluru, India",
  designer: "Studio Anagami",
  direction: "Contemporary minimalist · warm, calm, architectural",
  heroImage: "/images/elevation/hero.jpg",
  conceptStatement:
    "Three board-formed concrete volumes wrapped in vertical teak slats step around a central water courtyard, dissolving the line between inside and out. Double-height glazing pulls in the south light; a reflecting pool and a single frangipani anchor the calm.",

  // Internal / portal-only — keep OUT of the public site.
  // Locating identifiers are redacted in this public repo; the real values are
  // injected privately (env / portal data) once Session C lands.
  internalName: "Kalaimalai Residence",
  villaNo: "", // redacted — private
  community: "", // redacted — private
  address: "", // redacted — private (withheld from the public archive)
  plotArea: "4,800 sq ft",
  builtUpArea: "6,200 sq ft",
  floors: 3,
  status: "Execution",
  startDate: "2024-08-01",
};
