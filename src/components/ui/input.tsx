import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-paper px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30",
        className,
      )}
      {...props}
    />
  );
}
