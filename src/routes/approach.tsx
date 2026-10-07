import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/approach")({ component: ApproachPage });

function ApproachPage() {
  const { t } = useLocale();
  const c = t.approach;

  return (
    <main>
      <PageHero
        image="/images/gamedrive.jpg"
        imageAlt="Safari vehicle at first light in Greater Kruger"
        kicker={c.kicker}
        title={c.title}
        lede={c.lede}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Photo
              src="/images/winelands.jpg"
              alt="Stellenbosch winelands in late afternoon"
              className="aspect-[4/3] rounded-xl sm:aspect-[3/4]"
            />
          </div>
          <div className="space-y-10 lg:col-span-8">
            {c.sections.map((section) => (
              <article key={section.title} className="border-t border-border pt-6">
                <h2 className="font-display text-section font-medium leading-snug">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-title font-medium leading-tight tracking-tight">
              {c.whoTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {c.whoBody}
            </p>
            <Button asChild className="mt-8 w-full sm:w-auto">
              <Link to="/enquire">
                {t.home.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <Photo
            src="/images/bokaap.jpg"
            alt="Bo-Kaap street in Cape Town"
            className="aspect-[4/3] rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
