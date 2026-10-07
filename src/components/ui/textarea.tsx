import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-border bg-paper px-3 py-2.5 text-sm text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30",
        className,
      )}
      {...props}
    />
  );
}
