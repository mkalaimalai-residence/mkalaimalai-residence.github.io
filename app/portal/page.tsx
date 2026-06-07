import type { Metadata } from "next";
import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Portal",
  robots: { index: false, follow: false },
};

/**
 * Placeholder for the gated portal (Feature 003 / Session C). Exists so the
 * "Private Portal" nav link resolves instead of 404-ing. The real server-side
 * auth gate and portal modules land in Session C.
 */
export default function PortalPlaceholder() {
  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center gap-5 px-6 py-32 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
        <Lock size={20} />
      </span>
      <h1 className="font-serif text-3xl text-foreground">Private Portal</h1>
      <p className="text-muted-foreground">
        The internal control center — drawings, room matrix, vendors, BOQs,
        procurement, decisions, progress, snags and warranties — is coming in the
        next phase, behind a server-side password gate.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
      >
        <ArrowLeft size={15} /> Back to the residence
      </Link>
    </main>
  );
}
