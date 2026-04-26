"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HOW_WE_WORK_STEPS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HowWeWork() {
  return (
    <section className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: header and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel className="mb-5">Getting Started</SectionLabel>
            <h2
              className="font-display font-bold tracking-tight mb-5"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", color: "var(--color-text)" }}
            >
              From first call to
              <br />
              live team in two weeks.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
              We move fast without cutting corners. Standard technology stack
              onboarding takes under a week. Niche skills take 2–3 weeks. Urgent
              requests are always accommodated.
            </p>
            <Button as="link" href="/contact" variant="primary" size="md" icon={ArrowRight}>
              Start a Conversation
            </Button>
          </motion.div>

          {/* Right: steps */}
          <div className="space-y-0">
            {HOW_WE_WORK_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {i < HOW_WE_WORK_STEPS.length - 1 && (
                  <div
                    className="absolute left-5 top-10 bottom-0 w-px"
                    style={{
                      background: "linear-gradient(to bottom, var(--color-accent), transparent)",
                      opacity: 0.25,
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div className="shrink-0 relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 font-mono text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--color-accent-subtle)",
                      borderColor: "var(--color-accent)",
                      color: "#0ea5e9",
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h3
                    className="font-display font-semibold text-base mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
