import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PodModel } from "@/components/sections/PodModel";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Differentiators } from "@/components/sections/Differentiators";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Worldac Consulting — Tailored IT Solutions",
  description:
    "Worldac Consulting delivers bespoke IT solutions — custom development, cloud, AI, and nearshore delivery with full US business hours coverage.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PodModel />
      <HowWeWork />
      <CaseStudies />
      <Differentiators />
      <CTABanner />
    </>
  );
}
