import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function SelectField({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none rounded-md border border-border bg-paper bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3 pr-10 text-sm text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow,border-color] duration-150 focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/30",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'><path d='M1 1.5 6 6.5 11 1.5' stroke='%231c1915' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
      }}
      {...props}
    >
      {children}
    </select>
  );
}
