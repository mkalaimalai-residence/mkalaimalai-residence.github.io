/**
 * Repository — the ONLY data entry point for the app (build doc §7.0).
 *
 * Pages and components import from here, never from `data/` directly. Every function
 * is async so the MVP's local-module implementation can later be swapped for Supabase
 * (or any backend) without touching a single call site.
 */

import { project } from "@/data/project";
import { spaces } from "@/data/spaces";
import { domains } from "@/data/domains";
import { materials } from "@/data/materials";
import { drawings } from "@/data/drawings";
import { vendors } from "@/data/vendors";
import { procurement } from "@/data/procurement";
import { decisions } from "@/data/decisions";
import { boqs } from "@/data/boq";
import { progress } from "@/data/progress";
import { snags } from "@/data/snags";
import { warranties } from "@/data/warranties";
import { lessons } from "@/data/lessons";
import { gallery } from "@/data/gallery";

import type {
  BOQ,
  Decision,
  Domain,
  Drawing,
  GalleryItem,
  Lesson,
  Material,
  ProcurementItem,
  ProgressEntry,
  Project,
  Snag,
  Space,
  Vendor,
  Warranty,
} from "@/types";

// Project --------------------------------------------------------------------
export async function getProject(): Promise<Project> {
  return project;
}

// Spaces ---------------------------------------------------------------------
export async function getSpaces(): Promise<Space[]> {
  return spaces;
}
export async function getSpaceBySlug(slug: string): Promise<Space | null> {
  return spaces.find((s) => s.slug === slug) ?? null;
}
export async function getSpaceById(id: string): Promise<Space | null> {
  return spaces.find((s) => s.id === id) ?? null;
}

// Domains --------------------------------------------------------------------
export async function getDomains(): Promise<Domain[]> {
  return domains;
}
export async function getDomainBySlug(slug: string): Promise<Domain | null> {
  return domains.find((d) => d.slug === slug) ?? null;
}
export async function getDomainById(id: string): Promise<Domain | null> {
  return domains.find((d) => d.id === id) ?? null;
}

// Drawings -------------------------------------------------------------------
export async function getDrawings(): Promise<Drawing[]> {
  return drawings;
}
export async function getDrawingById(id: string): Promise<Drawing | null> {
  return drawings.find((d) => d.id === id) ?? null;
}

// Vendors --------------------------------------------------------------------
export async function getVendors(): Promise<Vendor[]> {
  return vendors;
}
export async function getVendorById(id: string): Promise<Vendor | null> {
  return vendors.find((v) => v.id === id) ?? null;
}

// Procurement ----------------------------------------------------------------
export async function getProcurement(): Promise<ProcurementItem[]> {
  return procurement;
}

// Decisions ------------------------------------------------------------------
export async function getDecisions(): Promise<Decision[]> {
  return decisions;
}
export async function getDecisionById(id: string): Promise<Decision | null> {
  return decisions.find((d) => d.id === id) ?? null;
}

// BOQ ------------------------------------------------------------------------
export async function getBOQs(): Promise<BOQ[]> {
  return boqs;
}

// Materials ------------------------------------------------------------------
export async function getMaterials(): Promise<Material[]> {
  return materials;
}
export async function getMaterialById(id: string): Promise<Material | null> {
  return materials.find((m) => m.id === id) ?? null;
}

// Progress -------------------------------------------------------------------
export async function getProgress(): Promise<ProgressEntry[]> {
  return progress;
}

// Snags ----------------------------------------------------------------------
export async function getSnags(): Promise<Snag[]> {
  return snags;
}

// Warranties -----------------------------------------------------------------
export async function getWarranties(): Promise<Warranty[]> {
  return warranties;
}

// Lessons --------------------------------------------------------------------
export async function getLessons(): Promise<Lesson[]> {
  return lessons;
}
export async function getLessonById(id: string): Promise<Lesson | null> {
  return lessons.find((l) => l.id === id) ?? null;
}

// Gallery --------------------------------------------------------------------
export async function getGallery(): Promise<GalleryItem[]> {
  return gallery;
}
