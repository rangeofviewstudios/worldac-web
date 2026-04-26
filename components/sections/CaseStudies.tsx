"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

export function CaseStudies() {
  return (
    <section
      className="section-py"
      style={{ backgroundColor: "var(--color-navy-800)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-xl">
            <SectionLabel className="mb-5">Case Studies</SectionLabel>
            <h2
              className="font-display font-bold tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)", color: "var(--color-text)" }}
            >
              Work that speaks
              <br />
              for itself.
            </h2>
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group relative flex flex-col p-8 lg:p-10 rounded-[var(--radius-xl)] border overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Background hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, #0ea5e9 8%, transparent), transparent)",
                }}
                aria-hidden="true"
              />

              {/* Industry tag */}
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="accent">{study.industry}</Badge>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {study.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-xl leading-snug mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {study.title}
              </h3>

              {/* Summary */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                {study.summary}
              </p>

              {/* Outcome */}
              <div
                className="rounded-[var(--radius-md)] p-4 mb-6 border-l-2"
                style={{
                  backgroundColor: "var(--color-bg-subtle)",
                  borderLeftColor: "#0ea5e9",
                }}
              >
                <p
                  className="text-xs font-mono tracking-wide uppercase mb-1.5"
                  style={{ color: "#0ea5e9" }}
                >
                  Outcome
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                  {study.metric}
                </p>
              </div>

              {/* Services used */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.services.map((svc) => (
                  <Badge key={svc} variant="subtle" className="text-[11px]">
                    {svc}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3 self-start"
                style={{ color: "#0ea5e9" }}
              >
                <span>Discuss this project</span>
                <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
