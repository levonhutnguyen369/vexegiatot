import * as React from "react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {children}
    </div>
  );
}

export function LogoImage({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn("h-8 w-auto", className)}
      {...props}
    />
  );
}

export function LogoText({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}
