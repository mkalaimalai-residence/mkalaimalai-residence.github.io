import type { Metadata } from "next";
import Image from "next/image";
import { getProject } from "@/lib/repository";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Vision · A Contemporary Zen Residence",
  description:
    "The philosophy behind the residence — lifestyle goals, site and climate response, indoor-outdoor living, the courtyard, material and light, and the smart home.",
};

const pillars = [
  {
    title: "Lifestyle goals",
    body: "A calm family home that slows the day down — spaces that flow into one another, framed views, and a quiet material palette that ages gracefully.",
  },
  {
    title: "Site & climate response",
    body: "Three board-formed concrete volumes step around a central court to shade and cross-ventilate. Vertical teak slats filter the harsh western sun while keeping the interiors open.",
  },
  {
    title: "Indoor–outdoor living",
    body: "Full-height sliding glass dissolves the line between living spaces and the courtyard. The garden, terrace and pergola extend the home outward.",
  },
  {
    title: "The courtyard",
    body: "A still reflecting pool and a single frangipani anchor the plan — cooling the section, mirroring the sky, and tying every room back to a shared centre.",
  },
  {
    title: "Material & light",
    body: "Microcement, teak veneer, natural marble and warm metals; daylight as the primary ornament, layered after dark with cove, accent and sculptural fixtures.",
  },
  {
    title: "The smart home",
    body: "An open KNX backbone runs lighting, climate, shading and AV scenes — chosen for serviceability and freedom from proprietary lock-in.",
  },
];

export default async function VisionPage() {
  const project = await getProject();

  return (
    <main className="flex flex-col">
      <section className="relative h-[48vh] min-h-[360px] w-full">
        <Image
          src="/images/elevation/aerial.jpg"
          alt="Aerial view of the residence and courtyard"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/80">
              Vision
            </p>
            <h1 className="font-serif text-4xl text-white sm:text-5xl">
              A calm, contemporary Zen home
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-serif text-2xl leading-relaxed text-foreground">
          {project.conceptStatement}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <SectionHeading
          eyebrow="Principles"
          title="What guided every decision"
          className="mb-10"
        />
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="space-y-2">
              <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
              <p className="text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
