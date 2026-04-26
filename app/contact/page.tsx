import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/sections/ContactForm";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Worldac Consulting. We'll respond within one business day.",
};

export default function ContactPage() {
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
            backgroundImage: `radial-gradient(ellipse 60% 50% at 20% 0%, color-mix(in srgb, #0ea5e9 10%, transparent), transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Contact</SectionLabel>
          <AnimatedHeading
            text="Let's talk about your project."
            tag="h1"
            className="font-display font-bold tracking-tight mb-4"
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
            No discovery questionnaires. Just a direct conversation about what
            you need and how we can help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-14 lg:gap-20">
            {/* Form */}
            <div>
              <h2
                className="font-display font-semibold text-xl mb-8"
                style={{ color: "var(--color-text)" }}
              >
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Info panel */}
            <div className="space-y-8">
              {/* Contact details */}
              <div
                className="p-6 rounded-[var(--radius-xl)] border"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-display font-semibold mb-5"
                  style={{ color: "var(--color-text)" }}
                >
                  Contact details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={15} className="shrink-0 mt-0.5" style={{ color: "#0ea5e9" }} />
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--color-text-faint)" }}>
                        Email
                      </p>
                      <a
                        href="mailto:contact@worldaconsulting.com"
                        className="text-sm transition-colors duration-200 hover:text-[#0ea5e9]"
                        style={{ color: "var(--color-text)" }}
                      >
                        contact@worldaconsulting.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#0ea5e9" }} />
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--color-text-faint)" }}>
                        Headquarters
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text)" }}>
                        Johns Creek, Atlanta, GA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="shrink-0 mt-0.5" style={{ color: "#0ea5e9" }} />
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--color-text-faint)" }}>
                        Office Hours
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text)" }}>
                        Monday – Friday, 9AM–6PM
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        EST to PST coverage via nearshore hubs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery hubs callout */}
              <div
                className="p-6 rounded-[var(--radius-xl)] border"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-display font-semibold mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  Delivery Hubs
                </h3>
                <div className="space-y-4">
                  {[
                    { city: "Guadalajara", role: "Primary Hub", region: "Jalisco, Mexico" },
                    { city: "Monterrey", role: "Secondary Hub", region: "Nuevo León, Mexico" },
                  ].map((hub) => (
                    <div
                      key={hub.city}
                      className="flex items-start gap-3 pb-4 last:pb-0 border-b last:border-b-0"
                      style={{ borderColor: "var(--color-border-subtle)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "#0ea5e9" }}
                      />
                      <div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "var(--color-text)" }}
                        >
                          {hub.city}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {hub.region} · {hub.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs mt-4 leading-relaxed"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  Both hubs operate within US business hours — EST to PST.
                </p>
              </div>

              {/* Response time */}
              <div
                className="p-5 rounded-[var(--radius-lg)] border-l-2"
                style={{
                  backgroundColor: "var(--color-accent-subtle)",
                  borderLeftColor: "#0ea5e9",
                }}
              >
                <p className="text-xs font-mono tracking-wide uppercase mb-1" style={{ color: "#0ea5e9" }}>
                  Response time
                </p>
                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                  We respond to all inquiries within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
