import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Worldac Consulting",
    default: "Worldac Consulting — Tailored IT Solutions",
  },
  description:
    "Worldac Consulting delivers bespoke IT solutions — custom development, cloud services, AI, and more — from our Atlanta HQ and nearshore delivery hubs in Mexico.",
  keywords: [
    "IT consulting",
    "custom software development",
    "nearshore development",
    "AWS cloud services",
    "AI consulting",
    "Atlanta IT firm",
  ],
  authors: [{ name: "Worldac Consulting" }],
  creator: "Worldac Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://worldaconsulting.com",
    siteName: "Worldac Consulting",
    title: "Worldac Consulting — Tailored IT Solutions",
    description:
      "Bespoke IT solutions aligned with your business objectives. Custom development, cloud, AI, and more — with nearshore delivery from Mexico.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldac Consulting",
    description: "Tailored IT solutions. Atlanta HQ. Nearshore delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
