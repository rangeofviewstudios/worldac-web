import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light";
}

export function SectionLabel({
  children,
  className,
  variant = "default",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-8 shrink-0 rounded-full",
          variant === "light"
            ? "bg-white/30"
            : "bg-[var(--color-accent)]"
        )}
      />
      <span
        className={cn(
          "text-xs font-mono tracking-[var(--letter-spacing-widest)] uppercase font-medium",
          variant === "light"
            ? "text-white/60"
            : "text-[var(--color-accent)]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
