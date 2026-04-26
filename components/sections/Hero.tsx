"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const transition = (delay = 0) => ({
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
  delay,
});

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-900)" }}
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 50% -10%, color-mix(in srgb, #0ea5e9 14%, transparent), transparent),
            radial-gradient(ellipse 50% 40% at 85% 110%, color-mix(in srgb, #0ea5e9 8%, transparent), transparent),
            radial-gradient(ellipse 35% 25% at 5% 70%, color-mix(in srgb, #243d5c 40%, transparent), transparent)
          `,
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Animated geometric accent — top right */}
      <div className="absolute top-24 right-0 w-64 h-64 lg:w-96 lg:h-96 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
          <motion.polygon
            points="150,10 280,80 280,220 150,290 20,220 20,80"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />
          <motion.polygon
            points="150,40 250,95 250,205 150,260 50,205 50,95"
            stroke="#0ea5e9"
            strokeWidth="0.75"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.circle
            cx="150"
            cy="150"
            r="60"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="4 8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ opacity: { duration: 1, delay: 1 }, rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Location tag */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={transition(0.1)}
            className="inline-flex items-center gap-2 mb-8"
          >
            <MapPin size={12} className="text-[#0ea5e9]" />
            <span className="text-xs font-mono tracking-[0.14em] uppercase text-[var(--color-slate-400)]">
              Johns Creek, Atlanta · Nearshore Delivery from Mexico
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={transition(0.2)}
            className="font-display font-bold leading-[1.05] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#f0f6ff" }}
          >
            IT delivery built
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #f0f6ff 0%, #38bdf8 60%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for the way
            </span>
            <br />
            you actually work.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={transition(0.32)}
            className="text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
            style={{ color: "var(--color-slate-400)" }}
          >
            Specialist teams assembled around your exact requirements, working
            your hours. No offshore overhead, no generic staffing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={transition(0.44)}
            className="flex flex-wrap gap-4"
          >
            <Button as="link" href="/services" size="lg" variant="primary" icon={ArrowRight}>
              Explore Our Services
            </Button>
            <Button as="link" href="/contact" size="lg" variant="outline">
              Get in Touch
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={transition(0.56)}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-14 pt-8 border-t"
            style={{ borderColor: "var(--color-navy-600)" }}
          >
            {[
              { label: "Standard onboarding", value: "< 1 week" },
              { label: "US hours coverage", value: "EST – PST" },
              { label: "Delivery hubs", value: "2 in Mexico" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className="text-2xl font-display font-bold tracking-tight"
                  style={{ color: "#0ea5e9" }}
                >
                  {item.value}
                </span>
                <span
                  className="text-xs leading-tight max-w-[80px]"
                  style={{ color: "var(--color-slate-400)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-navy-900))",
        }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "var(--color-slate-500)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--color-sky-500), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
