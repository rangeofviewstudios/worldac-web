import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight practice areas covering custom development, cloud, AI, mobile, eCommerce, testing, data analytics, and support, all delivered through our POD model.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ── */}
      <div
        className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-navy-900)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in srgb, #0ea5e9 12%, transparent), transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Services</SectionLabel>
          <AnimatedHeading
            text="Eight practice areas. One integrated team."
            tag="h1"
            className="font-display font-bold tracking-tight mb-5 max-w-3xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          />
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Every engagement draws from the same disciplined delivery model:
            dedicated PODs with specialists matched to your specific requirements.
          </p>
        </div>
      </div>

      {/* ── Sticky service navigator ── */}
      <div
        className="sticky top-16 z-30 border-b"
        style={{
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="flex items-center gap-1 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none" } as React.CSSProperties}
          >
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-[var(--radius-md)] border border-transparent transition-all duration-150 whitespace-nowrap text-[var(--color-text-muted)] hover:text-[#0ea5e9] hover:border-[color-mix(in_srgb,#0ea5e9_25%,transparent)] hover:bg-[color-mix(in_srgb,#0ea5e9_6%,transparent)]"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services list ── */}
      <div className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* ── Engagement model section ── */}
      <div
        className="section-py border-t"
        style={{
          backgroundColor: "var(--color-navy-800)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <SectionLabel className="mb-5 justify-center">Engagement Model</SectionLabel>
          <h2
            className="font-display font-bold tracking-tight mb-5"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--color-text)",
            }}
          >
            Every service, same delivery standard.
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Whether you need one practice area or a full multi-discipline POD,
            the model is consistent: dedicated resources, quarterly planning,
            full knowledge transition coverage, and security standards built to
            your spec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/contact" variant="primary" size="md" icon={ArrowRight}>
              Start a conversation
            </Button>
            <Button as="link" href="/about" variant="secondary" size="md">
              How we work
            </Button>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
