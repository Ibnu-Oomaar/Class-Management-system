import * as React from "react";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const variantClass =
    variant === "outline"
      ? "border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))]"
      : "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]";

  return (
    <div
      className={[
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClass,
        className,
      ].join(" ")}
      {...props}
    />
  );
}
