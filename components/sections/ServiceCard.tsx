"use client";

import { useState } from "react";
import {
  Code2, Wrench, ShoppingCart, Cloud, CheckCircle,
  Smartphone, BarChart3, Sparkles, CheckCircle2, ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Code2, Wrench, ShoppingCart, Cloud, CheckCircle,
  Smartphone, BarChart3, Sparkles,
};

type ProcessStep = { label: string; detail: string };

interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  process: ProcessStep[];
  deliverables: string[];
  outcome: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <article
      id={service.id}
      className="group grid grid-cols-1 lg:grid-cols-[320px_1fr] rounded-[var(--radius-xl)] border overflow-hidden scroll-mt-36 transition-colors duration-300 hover:border-[color-mix(in_srgb,#0ea5e9_25%,transparent)]"
      style={{
        backgroundColor: "var(--color-bg-elevated)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        className="p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div>
          <div
            className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-md)] mb-6 transition-colors duration-300 group-hover:bg-[color-mix(in_srgb,#0ea5e9_18%,transparent)]"
            style={{
              backgroundColor: "var(--color-accent-subtle)",
              color: "#0ea5e9",
            }}
          >
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <h2
            className="font-display font-bold text-xl mb-3 leading-snug"
            style={{ color: "var(--color-text)" }}
          >
            {service.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            {service.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Badge key={tag} variant="accent" className="text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="p-8 lg:p-10 flex flex-col gap-7">

        {/* Section eyebrow */}
        <div className="flex items-center gap-2.5">
          <div className="h-px w-6" style={{ backgroundColor: "#0ea5e9" }} />
          <span
            className="text-[10px] font-mono tracking-[0.15em] uppercase"
            style={{ color: "#0ea5e9" }}
          >
            Delivery Blueprint
          </span>
        </div>

        {/* ── Process Flow ── */}
        <div className="relative">
          {/* Connecting line — desktop only, runs between circle centers */}
          <div
            className="hidden lg:block absolute top-5 h-px pointer-events-none"
            style={{
              left: "12.5%",
              right: "12.5%",
              background:
                "linear-gradient(to right, color-mix(in srgb, #0ea5e9 20%, transparent), color-mix(in srgb, #0ea5e9 45%, transparent) 50%, color-mix(in srgb, #0ea5e9 20%, transparent))",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {service.process.map((step, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col items-center text-center px-2 py-4 rounded-[var(--radius-md)] border select-none transition-all duration-200 cursor-default",
                  hoveredStep === i
                    ? "border-[color-mix(in_srgb,#0ea5e9_40%,transparent)] bg-[color-mix(in_srgb,#0ea5e9_7%,transparent)]"
                    : "border-transparent hover:border-[color-mix(in_srgb,#0ea5e9_20%,transparent)] hover:bg-[color-mix(in_srgb,#0ea5e9_4%,transparent)]"
                )}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step circle */}
                <div
                  className={cn(
                    "relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold mb-3 transition-all duration-200",
                    hoveredStep === i
                      ? "text-white"
                      : "text-[#0ea5e9]"
                  )}
                  style={{
                    backgroundColor:
                      hoveredStep === i
                        ? "#0ea5e9"
                        : "color-mix(in srgb, #0ea5e9 14%, transparent)",
                    boxShadow:
                      hoveredStep === i
                        ? "0 0 16px color-mix(in srgb, #0ea5e9 45%, transparent)"
                        : "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Step label */}
                <div
                  className={cn(
                    "text-xs font-semibold mb-1 transition-colors duration-200",
                    hoveredStep === i ? "text-[#0ea5e9]" : ""
                  )}
                  style={{
                    color: hoveredStep === i ? "#0ea5e9" : "var(--color-text)",
                  }}
                >
                  {step.label}
                </div>

                {/* Step detail */}
                <div
                  className="text-[11px] leading-snug"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: "var(--color-border)" }} />

        {/* ── Deliverables + Outcome ── */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-start">

          {/* What you get */}
          <div>
            <div
              className="text-[10px] font-mono tracking-[0.15em] uppercase mb-3.5"
              style={{ color: "var(--color-text-faint)" }}
            >
              What you get
            </div>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <CheckCircle2
                    size={14}
                    className="shrink-0 mt-0.5"
                    style={{ color: "#0ea5e9" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome callout */}
          <div
            className="sm:w-[188px] p-4 rounded-[var(--radius-md)] border-l-2 shrink-0"
            style={{
              backgroundColor: "color-mix(in srgb, #0ea5e9 6%, transparent)",
              borderLeftColor: "#0ea5e9",
            }}
          >
            <div
              className="text-[10px] font-mono tracking-[0.15em] uppercase mb-1.5"
              style={{ color: "#0ea5e9" }}
            >
              Outcome
            </div>
            <div
              className="text-sm font-semibold leading-snug"
              style={{ color: "var(--color-text)" }}
            >
              {service.outcome}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Button
            as="link"
            href="/contact"
            variant="outline"
            size="sm"
            icon={ArrowRight}
          >
            Discuss this service
          </Button>
        </div>
      </div>
    </article>
  );
}
