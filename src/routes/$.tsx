import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/$")({
  component: MissingPage,
});

function MissingPage() {
  const { t } = useLocale();

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-widest text-sage">
        404
      </p>
      <h1 className="mt-3 font-display text-title font-medium leading-tight tracking-tight">
        {t.missing.title}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
        {t.missing.body}
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link to="/">{t.missing.home}</Link>
        </Button>
      </div>
    </main>
  );
}
