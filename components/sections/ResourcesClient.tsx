"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const articles = [
  {
    id: "pod-model-vs-staff-aug",
    category: "Delivery",
    title: "POD Model vs. Staff Augmentation: Which Fits Your Roadmap?",
    excerpt:
      "Staff aug gets you people. The POD model gets you outcomes. Here's how to think about the tradeoff depending on the stage and type of work you're doing.",
    readTime: "6 min read",
    date: "March 2025",
  },
  {
    id: "nearshore-vs-offshore",
    category: "Strategy",
    title: "Why Nearshore Is Winning the IT Delivery Debate",
    excerpt:
      "Offshore models offered cost savings at the expense of coordination overhead. Nearshore changes the equation — same timezone, same business culture, closer talent.",
    readTime: "5 min read",
    date: "February 2025",
  },
  {
    id: "aws-cost-optimization",
    category: "Cloud",
    title: "Five AWS Cost Patterns That Kill Cloud ROI",
    excerpt:
      "Most cloud overspend isn't from bad architecture decisions — it's from five operational patterns that accumulate silently. Here's what to audit first.",
    readTime: "7 min read",
    date: "January 2025",
  },
  {
    id: "generative-ai-enterprise",
    category: "AI",
    title: "Generative AI in the Enterprise: Where It Actually Works",
    excerpt:
      "Skipping the hype: the use cases where GenAI delivers real ROI today, the ones to avoid, and how to evaluate readiness before committing budget.",
    readTime: "8 min read",
    date: "December 2024",
  },
  {
    id: "onboarding-engineering-teams",
    category: "People",
    title: "Engineering Team Onboarding: The 5–10 Day Standard",
    excerpt:
      "Fast onboarding is an engineering problem, not just an HR one. How we achieve consistent 5–10 day readiness regardless of stack complexity.",
    readTime: "4 min read",
    date: "November 2024",
  },
  {
    id: "data-infrastructure-healthcare",
    category: "Industry",
    title: "Data Infrastructure Decisions in Regulated Industries",
    excerpt:
      "Healthcare and life sciences have tighter constraints than most sectors. How do you build a modern data platform without creating compliance exposure?",
    readTime: "9 min read",
    date: "October 2024",
  },
];

const categories = ["All", "Delivery", "Strategy", "Cloud", "AI", "People", "Industry"];

export function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* ── Sticky category filter ── */}
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
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-[var(--radius-md)] transition-all duration-150"
                  style={{
                    backgroundColor: isActive
                      ? "var(--color-accent-subtle)"
                      : "transparent",
                    color: isActive ? "#0ea5e9" : "var(--color-text-muted)",
                    border: `1px solid ${
                      isActive
                        ? "color-mix(in srgb, #0ea5e9 25%, transparent)"
                        : "transparent"
                    }`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Article grid ── */}
      <div className="section-py" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((article) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col p-6 rounded-[var(--radius-xl)] border"
                    style={{
                      backgroundColor: "var(--color-bg-elevated)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {/* Category + read time */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="accent" className="text-[11px]">
                        {article.category}
                      </Badge>
                      <div
                        className="flex items-center gap-1.5 text-[11px] font-mono"
                        style={{ color: "var(--color-text-faint)" }}
                      >
                        <Clock size={10} />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h2
                      className="font-display font-semibold text-base leading-snug mb-3"
                      style={{ color: "var(--color-text)" }}
                    >
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-sm leading-relaxed flex-1 mb-5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Date */}
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      {article.date}
                    </span>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-sm" style={{ color: "var(--color-text-faint)" }}>
                No articles in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
