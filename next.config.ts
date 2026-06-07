import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",
  // Pages is served over a CDN with no Next.js image optimizer, so emit plain <img>.
  images: { unoptimized: true },
  // Emit `route/index.html` so deep links resolve as static files on Pages.
  trailingSlash: true,
  // Pin the workspace root — a stray lockfile in the home dir otherwise confuses inference.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
