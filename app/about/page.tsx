import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DELIVERY_HUBS } from "@/lib/constants";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Worldac Consulting — nearshore IT firm headquartered in Atlanta with delivery hubs in Guadalajara and Monterrey, Mexico.",
};

const values = [
  {
    title: "Substance over ceremony",
    description:
      "We don't waste your time with unnecessary process. Every engagement starts with a direct conversation and moves to execution as quickly as possible.",
  },
  {
    title: "Aligned incentives",
    description:
      "We absorb knowledge transition costs when we backfill a role. Our success is tied to your team's performance, not to how many seats we fill.",
  },
  {
    title: "Depth over breadth",
    description:
      "We build talent around your business specifically. The longer someone works in your environment, the more valuable they become, and we structure everything to keep them there.",
  },
  {
    title: "Security by default",
    description:
      "Background checks, mandatory training, access controls, and encrypted data handling are baselines, not add-ons. Your specific security requirements go on top.",
  },
];

export default function AboutPage() {
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
            backgroundImage: `radial-gradient(ellipse 70% 50% at 30% 0%, color-mix(in srgb, #0ea5e9 10%, transparent), transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">About Worldac</SectionLabel>
          <AnimatedHeading
            text="Precision delivery. Nearshore proximity."
            tag="h1"
            className="font-display font-bold tracking-tight mb-5 max-w-3xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          />
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            We built Worldac to solve a specific problem: most IT consulting is
            either too far removed or too expensive. We fixed both.
          </p>
        </div>
      </div>

      {/* Company story */}
      <div className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <SectionLabel className="mb-5">Our Story</SectionLabel>
              <h2
                className="font-display font-bold tracking-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", color: "var(--color-text)" }}
              >
                Built for businesses that need
                more than generic IT support.
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                <p>
                  We're a nearshore IT firm headquartered in Atlanta, with engineering
                  teams in Guadalajara and Monterrey. Our work spans custom software,
                  cloud infrastructure, mobile, AI, data, and everything between those
                  disciplines.
                </p>
                <p>
                  Our delivery hubs sit in Guadalajara and Monterrey (Mexico's Silicon
                  Valley), giving us access to deep engineering talent while keeping full
                  US business hours coverage from EST to PST.
                </p>
                <p>
                  We work with US and UK businesses that need reliable IT delivery without
                  the communication friction of traditional offshore models. Same timezone.
                  Same business culture. Better outcomes.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <SectionLabel className="mb-5">Our Model</SectionLabel>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Our core delivery model is the POD: cross-functional teams assembled
                from specialist guilds and dedicated to a single client engagement.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We plan quarterly to stay ahead of your resource needs, and we onboard
                within 5 to 10 business days. When we backfill any role, we cover every
                transition cost. Continuity is our responsibility, not yours.
              </p>

              {/* Key figures */}
              <div
                className="mt-8 p-6 rounded-[var(--radius-lg)] border"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: "56+", label: "Combined leadership years" },
                    { value: "2", label: "Nearshore delivery hubs" },
                    { value: "EST–PST", label: "Full US hours coverage" },
                    { value: "5–10 days", label: "Standard onboarding" },
                  ].map((fig) => (
                    <div key={fig.label}>
                      <div
                        className="font-display font-bold text-2xl mb-1"
                        style={{ color: "#0ea5e9" }}
                      >
                        {fig.value}
                      </div>
                      <div className="text-xs leading-snug" style={{ color: "var(--color-text-muted)" }}>
                        {fig.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div
        className="section-py border-t"
        style={{
          backgroundColor: "var(--color-navy-800)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <SectionLabel className="mb-5">How We Operate</SectionLabel>
            <h2
              className="font-display font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", color: "var(--color-text)" }}
            >
              Principles that shape every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-[var(--radius-lg)] border"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-display font-semibold mb-2.5"
                  style={{ color: "var(--color-text)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery hubs */}
      <div className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <SectionLabel className="mb-5">Where We Work</SectionLabel>
            <h2
              className="font-display font-bold tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", color: "var(--color-text)" }}
            >
              Three locations. One team.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Atlanta for client relationships. Guadalajara and Monterrey for delivery.
              All three operate within US business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DELIVERY_HUBS.map((hub, i) => (
              <div
                key={hub.city}
                className="relative p-7 rounded-[var(--radius-xl)] border overflow-hidden"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: i === 0 ? "color-mix(in srgb, #0ea5e9 40%, transparent)" : "var(--color-border)",
                }}
              >
                {i === 0 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ backgroundColor: "#0ea5e9" }}
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-start gap-2.5 mb-4">
                  <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#0ea5e9" }} />
                  <div>
                    <div
                      className="text-xs font-mono tracking-wide uppercase mb-1"
                      style={{ color: "#0ea5e9" }}
                    >
                      {hub.role}
                    </div>
                  </div>
                </div>
                <h3
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: "var(--color-text)" }}
                >
                  {hub.city}
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>
                  {hub.region}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-faint)" }}>
                  {hub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  );
}
