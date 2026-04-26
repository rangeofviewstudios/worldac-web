"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-800)", paddingBlock: "6rem" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in srgb, #0ea5e9 12%, transparent), transparent),
            radial-gradient(ellipse 40% 40% at 80% 0%, color-mix(in srgb, #0ea5e9 6%, transparent), transparent)
          `,
        }}
        aria-hidden="true"
      />

      {/* Geometric accent */}
      <div className="absolute right-0 top-0 bottom-0 w-96 overflow-hidden pointer-events-none opacity-5" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto">
          <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="200" stroke="white" strokeWidth="1" />
          <polygon points="200,10 380,110 380,290 200,390 20,290 20,110" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-xs font-mono tracking-[0.15em] uppercase mb-5"
            style={{ color: "#0ea5e9" }}
          >
            Let's work together
          </p>
          <SplitText
            text="Let's build something worth shipping."
            tag="h2"
            className="font-display font-bold tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
            delay={18}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 42 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-40px"
            textAlign="center"
          />
          <p
            className="text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "var(--color-text-muted)" }}
          >
            Tell us about your project. We'll get back to you within a business
            day, with a direct conversation and no sales decks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="link" href="/contact" size="lg" variant="primary" icon={ArrowRight}>
              Get in Touch
            </Button>
            <a
              href="mailto:contact@worldaconsulting.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Mail size={15} />
              contact@worldaconsulting.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
