import * as React from "react";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({ className = "", ...props }: AvatarProps) {
  return (
    <div
      className={[
        "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[hsl(var(--muted))]",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function AvatarImage({
  className = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={[
        "aspect-square h-full w-full object-cover",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function AvatarFallback({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "flex h-full w-full items-center justify-center bg-[hsl(var(--muted))] font-medium",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
