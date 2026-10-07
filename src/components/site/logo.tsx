import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function ProteaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      <path
        d="M16 4c.4 2.4 1.1 4.4 2.2 6.2 1.4 2.2 2.2 3.3 2.2 5.3 0 3.4-2 6.2-4.4 6.2S11.6 18.9 11.6 15.5c0-2 .8-3.1 2.2-5.3C14.9 8.4 15.6 6.4 16 4Z"
        fill="currentColor"
      />
      <path
        d="M8.2 9.2c1.8 1.6 3.2 2.6 4.6 4.6 1 1.5 1.4 2.6 1.4 4.2 0 2.8-1.8 4.6-3.6 4.1-1.8-.5-2.8-3-2.8-5.8 0-1.7.1-3.2.4-7.1Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M23.8 9.2c-1.8 1.6-3.2 2.6-4.6 4.6-1 1.5-1.4 2.6-1.4 4.2 0 2.8 1.8 4.6 3.6 4.1 1.8-.5 2.8-3 2.8-5.8 0-1.7-.1-3.2-.4-7.1Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M16 21.2c.2 2.2.4 4.2.5 6.3h-1c.1-2.1.3-4.1.5-6.3Z"
        fill="currentColor"
      />
      <circle cx="16" cy="14.6" r="1.35" fill="var(--color-paper)" />
    </svg>
  );
}

export function Logo({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 no-underline",
        invert ? "text-paper" : "text-ink",
      )}
      aria-label="SA Roots Tours"
    >
      <ProteaMark className={invert ? "text-paper" : "text-sage"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-medium tracking-tight">
          SA Roots
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-0.5 text-xs font-medium uppercase tracking-widest",
              invert ? "text-paper/70" : "text-muted",
            )}
          >
            Tours
          </span>
        ) : null}
      </span>
    </Link>
  );
}
