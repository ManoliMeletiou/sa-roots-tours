import { Link } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message =
    error instanceof Error
      ? error.message
      : "An unexpected error occurred. Try reloading the page.";

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center bg-paper px-6 py-24 text-ink">
      <p className="text-xs font-medium uppercase tracking-widest text-sage">
        SA Roots Tours
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium leading-tight">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed break-words text-ink-soft">
        {message}
      </p>
      <Link to="/" className="mt-8 text-sm font-medium text-sage">
        Back to the start
      </Link>
    </main>
  );
}
