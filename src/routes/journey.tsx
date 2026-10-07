import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/journey")({ component: JourneyPage });

function JourneyPage() {
  const { t } = useLocale();
  const c = t.journey;

  return (
    <main>
      <PageHero
        image="/images/cape-peninsula.jpg"
        imageAlt="Cape Peninsula coastline"
        kicker={c.kicker}
        title={c.title}
        lede={c.lede}
      />

      <nav
        aria-label={c.jumpLabel}
        className="sticky top-16 z-20 border-b border-border bg-paper/95 backdrop-blur-sm sm:top-20"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {c.jumpLabel}
          </p>
          <div className="scroll-row mt-3 flex gap-2">
            {c.days.map((day) => (
              <a
                key={day.day}
                href={`#day-${day.day}`}
                className="inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-border bg-paper-2 px-3 text-sm font-medium text-ink"
              >
                {String(day.day).padStart(2, "0")}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <ol className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        {c.days.map((day, index) => (
          <li
            id={`day-${day.day}`}
            key={day.day}
            className="grid scroll-mt-40 gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-widest text-sage">
                {c.dayLabel} {String(day.day).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-section font-medium leading-snug">
                {day.theme}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {day.programme}
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                {c.nightsLabel}: {day.night}
              </p>
            </div>
            <Photo
              src={day.image}
              alt={day.imageAlt}
              className={cn(
                "aspect-[16/10] rounded-xl md:col-span-7",
                index % 2 === 1 && "md:order-first",
              )}
            />
          </li>
        ))}
      </ol>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-section font-medium">
              {c.inclusionsTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              {c.inclusions.map((item) => (
                <li key={item} className="border-l-2 border-sage pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-section font-medium">
              {c.exclusionsTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              {c.exclusions.map((item) => (
                <li key={item} className="border-l-2 border-border pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-section font-medium">
          {c.extensionsTitle}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {c.extensions.map((ext, i) => (
            <article key={ext.title} className="rounded-xl bg-paper-2 p-6">
              <Photo
                src={
                  i === 0
                    ? "/images/cape-peninsula.jpg"
                    : i === 1
                      ? "/images/winelands.jpg"
                      : "/images/lodge-dusk.jpg"
                }
                alt=""
                className="mb-5 aspect-[16/10] rounded-lg"
              />
              <h3 className="font-display text-xl font-medium">{ext.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {ext.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-section font-medium">
            {c.promisesTitle}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {c.promises.map((item) => (
              <li
                key={item}
                className="border-t border-paper/15 pt-4 text-sm leading-relaxed text-paper/80"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="invert" className="mt-10 w-full sm:w-auto">
            <Link to="/enquire">
              {t.home.ctaPrimary}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
