import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-950)] border-t border-[var(--color-navy-700)] text-[var(--color-slate-400)]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Logo variant="light" size="md" />
            <p className="text-sm leading-relaxed text-[var(--color-slate-400)] max-w-xs">
              Bespoke IT solutions that align with your business objectives.
              Nearshore delivery, US business hours.
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="shrink-0 mt-0.5 text-[var(--color-sky-500)]" />
                <span>Johns Creek, Atlanta, GA</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={13} className="shrink-0 mt-0.5 text-[var(--color-sky-500)]" />
                <a
                  href="mailto:contact@worldaconsulting.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@worldaconsulting.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={13} className="shrink-0 mt-0.5 text-[var(--color-sky-500)]" />
                <span>Mon–Fri, 9AM–6PM · EST–PST coverage</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.12em] uppercase text-white/50">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.12em] uppercase text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery hubs column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.12em] uppercase text-white/50">
              Delivery Hubs
            </h3>
            <div className="space-y-4">
              {[
                { city: "Johns Creek", region: "Atlanta, GA", role: "HQ" },
                { city: "Guadalajara", region: "Jalisco, Mexico", role: "Delivery" },
                { city: "Monterrey", region: "Nuevo León, Mexico", role: "Delivery" },
              ].map((hub) => (
                <div key={hub.city} className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white font-medium">{hub.city}</span>
                    <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-navy-700)] text-[var(--color-sky-400)]">
                      {hub.role}
                    </span>
                  </div>
                  <p className="text-xs">{hub.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-navy-700)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © {currentYear} Worldac Consulting. All rights reserved.
          </p>
          <p className="text-xs">
            Headquartered in Johns Creek, Atlanta, GA · Nearshore delivery from Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}
