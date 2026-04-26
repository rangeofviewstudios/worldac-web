"use client";

import { Users, Shield, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { DIFFERENTIATORS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ElementType> = {
  Users, Shield, Calendar, Clock,
};

export function Differentiators() {
  return (
    <section className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-14">
          <SectionLabel className="mb-5">Why Worldac</SectionLabel>
          <h2
            className="font-display font-bold tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", color: "var(--color-text)" }}
          >
            Built for the way
            <br />
            enterprises actually work.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff, i) => {
            const Icon = iconMap[diff.icon] ?? Shield;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group p-6 rounded-[var(--radius-lg)] border transition-colors duration-200 hover:border-[color-mix(in_srgb,#0ea5e9_30%,transparent)] cursor-default"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)] mb-4 transition-colors duration-200 group-hover:bg-[color-mix(in_srgb,#0ea5e9_20%,transparent)]"
                  style={{
                    backgroundColor: "var(--color-accent-subtle)",
                    color: "#0ea5e9",
                  }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <h3
                  className="font-display font-semibold text-sm mb-2.5"
                  style={{ color: "var(--color-text)" }}
                >
                  {diff.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
