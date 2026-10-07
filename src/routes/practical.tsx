import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PriceSketch } from "@/components/site/price-sketch";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/practical")({
  component: PracticalPage,
});

function PracticalPage() {
  const { t } = useLocale();
  const c = t.practical;

  return (
    <main>
      <PageHero
        image="/images/waterfront.jpg"
        imageAlt="Cape Town harbour at blue hour"
        kicker={c.kicker}
        title={c.title}
        lede={c.lede}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-section font-medium">{c.priceTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            {c.priceLede}
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
            {c.pricePoints.map((item) => (
              <li key={item} className="border-l-2 border-sage pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <PriceSketch />
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-section font-medium">
              {c.groupTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {c.groupBody}
            </p>
          </div>
          <div>
            <h2 className="font-display text-section font-medium">
              {c.travelTitle}
            </h2>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
              {c.travelPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-section font-medium">{c.faqTitle}</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {c.faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium marker:content-none">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-paper-2 text-lg leading-none text-ink transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <Button asChild className="mt-10 w-full sm:w-auto">
          <Link to="/enquire">
            {t.home.ctaPrimary}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
