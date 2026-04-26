import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light" | "dark";
}

export function Logo({
  className,
  showWordmark = true,
  size = "md",
  variant = "default",
}: LogoProps) {
  const markSize = { sm: 28, md: 36, lg: 48 }[size];
  const textClass = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  }[size];

  const textColor =
    variant === "light"
      ? "text-white"
      : variant === "dark"
      ? "text-[#050d1a]"
      : "text-[var(--color-text)]";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group shrink-0", className)}
      aria-label="Worldac Consulting — Home"
    >
      {/* Globe mark */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0 transition-opacity duration-200 group-hover:opacity-85", textColor)}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="wc-globe-bg" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.03" />
          </radialGradient>
          <radialGradient id="wc-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Atmosphere fill */}
        <circle cx="18" cy="18" r="13.5" fill="url(#wc-globe-bg)" />

        {/* Latitude: upper */}
        <ellipse cx="18" cy="12.2" rx="10.8" ry="2.9" stroke="currentColor" strokeWidth="0.6" opacity="0.22" />

        {/* Latitude: lower */}
        <ellipse cx="18" cy="23.8" rx="10.8" ry="2.9" stroke="currentColor" strokeWidth="0.6" opacity="0.22" />

        {/* Meridian: left arc */}
        <path d="M18,4.5 C9.5,9 9.5,27 18,31.5" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />

        {/* Meridian: right arc */}
        <path d="M18,4.5 C26.5,9 26.5,27 18,31.5" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />

        {/* Globe outline */}
        <circle cx="18" cy="18" r="13.5" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />

        {/* Accent: equator band — the hero element */}
        <ellipse cx="18" cy="18" rx="13.5" ry="3.75" stroke="#0ea5e9" strokeWidth="1.75" />

        {/* Accent: facing meridian — subtle rightward bulge suggests depth */}
        <path d="M18,4.5 C19.8,10.5 19.8,25.5 18,31.5" stroke="#0ea5e9" strokeWidth="1.1" opacity="0.65" />

        {/* Center intersection glow */}
        <circle cx="18" cy="18" r="3.5" fill="url(#wc-center-glow)" />

        {/* Center dot: equator meets prime meridian */}
        <circle cx="18" cy="18" r="1.8" fill="#0ea5e9" />
        <circle cx="18" cy="18" r="0.85" fill="white" opacity="0.93" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className={cn(
            "font-display font-bold tracking-[-0.02em] leading-none transition-opacity duration-200 group-hover:opacity-80",
            textClass,
            textColor
          )}
        >
          Worldac
          <span style={{ color: "#0ea5e9" }}>.</span>
        </span>
      )}
    </Link>
  );
}
