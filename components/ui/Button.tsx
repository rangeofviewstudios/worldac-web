import Link from "next/link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-accent)] text-white border-transparent",
    "hover:bg-[var(--color-accent-hover)] hover:-translate-y-px",
    "shadow-sm hover:shadow-[var(--shadow-glow-sm)]",
  ].join(" "),
  secondary: [
    "bg-[var(--color-bg-elevated)] text-[var(--color-text)] border-[var(--color-border)]",
    "hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-px",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-muted)] border-transparent",
    "hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)]",
  ].join(" "),
  outline: [
    "bg-transparent text-[var(--color-accent)] border-[var(--color-accent)]",
    "hover:bg-[var(--color-accent-subtle)] hover:-translate-y-px",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-7 py-3.5 gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium border rounded-[var(--radius-md)]",
    "transition-all duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:opacity-50 disabled:pointer-events-none",
    "select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const iconSize = { sm: 13, md: 15, lg: 17 }[size];

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={iconSize} strokeWidth={2} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={iconSize} strokeWidth={2} />}
    </>
  );

  if (props.as === "link") {
    return (
      <Link href={props.href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseStyles}
      type={(props as ButtonAsButton).type ?? "button"}
      disabled={(props as ButtonAsButton).disabled}
      onClick={(props as ButtonAsButton).onClick}
    >
      {content}
    </button>
  );
}
