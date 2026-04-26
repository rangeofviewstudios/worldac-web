"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pods = [
  { label: "Product", color: "#0ea5e9" },
  { label: "Engineering", color: "#38bdf8" },
  { label: "QA", color: "#7dd3fc" },
  { label: "Design", color: "#0284c7" },
  { label: "DevOps", color: "#0ea5e9" },
];

const guilds = ["Frontend", "Backend", "Cloud", "Data", "AI/ML", "Mobile", "Security"];

export function PodModel() {
  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-800)" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, #0ea5e9 6%, transparent), transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel className="mb-5">How We Deliver</SectionLabel>
            <h2
              className="font-display font-bold tracking-tight mb-5"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", color: "var(--color-text)" }}
            >
              The POD Model:
              <br />
              cross-functional by design.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
              We build dedicated teams by drawing specialists from guilds across
              every discipline. Each POD is assembled to match your engagement,
              not filled from whoever happens to be available.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
              The longer a POD works in your environment, the more valuable they
              become. We structure our model specifically to keep them on your
              account.
            </p>

            {/* Key attributes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "5–10 days", label: "Typical onboarding time" },
                { metric: "1 week", label: "Standard stack support" },
                { metric: "2–3 weeks", label: "Niche skill onboarding" },
                { metric: "Zero cost", label: "Knowledge transition on us" },
              ].map((attr) => (
                <div
                  key={attr.label}
                  className="p-4 rounded-[var(--radius-md)] border"
                  style={{
                    backgroundColor: "var(--color-bg-subtle)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="font-display font-bold text-xl mb-0.5"
                    style={{ color: "#0ea5e9" }}
                  >
                    {attr.metric}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: "var(--color-text-muted)" }}>
                    {attr.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual diagram */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
            aria-hidden="true"
          >
            {/* Guild layer */}
            <div
              className="absolute inset-x-0 -bottom-4 rounded-[var(--radius-xl)] border"
              style={{
                backgroundColor: "var(--color-navy-700)",
                borderColor: "var(--color-navy-600)",
                height: "calc(100% + 2rem)",
                zIndex: 0,
              }}
            />

            <div className="relative z-10 p-6 lg:p-8 rounded-[var(--radius-xl)] border" style={{
              backgroundColor: "var(--color-bg-elevated)",
              borderColor: "var(--color-border)",
            }}>
              {/* POD Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.15em] uppercase mb-1" style={{ color: "#0ea5e9" }}>
                    Dedicated POD
                  </p>
                  <p className="text-sm font-display font-semibold" style={{ color: "var(--color-text)" }}>
                    Your Project Team
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-mono"
                  style={{
                    backgroundColor: "color-mix(in srgb, #0ea5e9 12%, transparent)",
                    color: "#38bdf8",
                    border: "1px solid color-mix(in srgb, #0ea5e9 25%, transparent)",
                  }}
                >
                  Active
                </div>
              </div>

              {/* POD members */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {pods.map((pod, i) => (
                  <motion.div
                    key={pod.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2.5 p-3 rounded-[var(--radius-md)] border"
                    style={{
                      backgroundColor: "var(--color-bg-subtle)",
                      borderColor: "var(--color-border-subtle)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${pod.color} 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${pod.color} 30%, transparent)`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: pod.color }}
                      />
                    </div>
                    <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>
                      {pod.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider with label */}
              <div className="relative flex items-center mb-5">
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
                <span
                  className="mx-3 text-[10px] font-mono tracking-widest uppercase"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  Fed by Guilds
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
              </div>

              {/* Guild tags */}
              <div className="flex flex-wrap gap-2">
                {guilds.map((guild, i) => (
                  <motion.span
                    key={guild}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                    className="text-[11px] px-2.5 py-1 rounded-full font-mono"
                    style={{
                      backgroundColor: "var(--color-bg-subtle)",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {guild}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
