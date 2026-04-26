"use client";

import Link from "next/link";
import {
  Code2, Wrench, ShoppingCart, Cloud, CheckCircle,
  Smartphone, BarChart3, Sparkles, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import SplitText from "@/components/ui/SplitText";

const iconMap: Record<string, React.ElementType> = {
  Code2, Wrench, ShoppingCart, Cloud, CheckCircle,
  Smartphone, BarChart3, Sparkles,
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function ServicesGrid() {
  return (
    <section className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <SectionLabel className="mb-5">What We Do</SectionLabel>
          <SplitText
            text="Eight practice areas, one integrated team."
            tag="h2"
            className="font-display font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "var(--color-text)" }}
            delay={18}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 36 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
          <p className="text-base lg:text-lg" style={{ color: "var(--color-text-muted)" }}>
            Our POD model combines specialists from across disciplines into
            dedicated teams — so every engagement has exactly the depth it needs.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "var(--color-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.id}
                variants={item}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col h-full p-6 lg:p-7 transition-colors duration-200"
                  style={{ backgroundColor: "var(--color-bg-elevated)" }}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-accent-subtle)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-semibold text-sm mb-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs leading-relaxed flex-1 mb-4"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="subtle" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <div
                    className="flex items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={11} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--color-text-muted)" }}
          >
            View detailed service descriptions
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
