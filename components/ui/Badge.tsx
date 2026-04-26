import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "subtle";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-[var(--radius-sm)] border",
        variant === "default" && [
          "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)]",
          "border-[var(--color-border)]",
        ],
        variant === "accent" && [
          "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
          "border-[color-mix(in_srgb,var(--color-accent)_25%,transparent)]",
        ],
        variant === "subtle" && [
          "bg-transparent text-[var(--color-text-faint)]",
          "border-[var(--color-border-subtle)]",
        ],
        className
      )}
    >
      {children}
    </span>
  );
}
