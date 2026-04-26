import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ResourcesClient } from "@/components/sections/ResourcesClient";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Insights on IT strategy, nearshore delivery, cloud, AI, and digital transformation from the Worldac Consulting team.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-navy-900)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 50% at 70% -10%, color-mix(in srgb, #0ea5e9 10%, transparent), transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Resources</SectionLabel>
          <AnimatedHeading
            text="Straight thinking on IT strategy and delivery."
            tag="h1"
            className="font-display font-bold tracking-tight mb-4 max-w-2xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          />
          <p
            className="text-lg max-w-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Practical perspectives from the Worldac team. No vendor content, no
            thought leadership filler.
          </p>
        </div>
      </div>

      <ResourcesClient />
    </>
  );
}
