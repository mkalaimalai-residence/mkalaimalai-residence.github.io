/** Public navigation — only routes that exist, so no link 404s. */
export const PUBLIC_NAV = [
  { label: "Vision", href: "/vision" },
  { label: "Spaces", href: "/spaces" },
  { label: "Domains", href: "/domains" },
  { label: "Materials", href: "/materials" },
  { label: "Journey", href: "/journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Lessons", href: "/lessons" },
] as const;

export const PORTAL_LINK = { label: "Private Portal", href: "/portal" } as const;
