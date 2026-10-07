import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/site/photo";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useLocale();
  const c = t.home;

  return (
    <main>
      <section className="relative isolate min-h-svh overflow-hidden">
        <Photo
          src="/images/hero-table-mountain.jpg"
          alt="Table Mountain and Lion's Head across Table Bay at golden hour"
          outline={false}
          className="absolute inset-0"
          imgClassName="no-outline hero-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pb-36 pt-28 sm:px-6 sm:pb-20">
          <div className="stagger-in max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-paper/75">
              {c.kicker}
            </p>
            <h1 className="mt-4 font-display text-display font-medium leading-none tracking-tight text-paper">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
              {c.lede}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" variant="invert" className="w-full sm:w-auto">
                <Link to="/enquire">
                  {c.ctaPrimary}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="invertOutline" className="w-full sm:w-auto">
                <Link to="/journey">{c.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-paper-2">
        <dl className="mx-auto max-w-6xl divide-y divide-border sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 sm:bg-border lg:grid-cols-4">
          {c.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 bg-paper-2 px-4 py-4 sm:block sm:px-6 sm:py-6"
            >
              <dt className="text-xs uppercase tracking-widest text-muted">
                {fact.label}
              </dt>
              <dd className="text-right font-display text-lg font-medium leading-snug sm:mt-2 sm:text-left sm:text-2xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-widest text-sage">
            {c.manifestoKicker}
          </p>
          <h2 className="mt-3 font-display text-title font-medium leading-tight tracking-tight">
            {c.manifestoTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            {c.manifestoBody}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7">
          <Photo
            src="/images/bokaap.jpg"
            alt="Quiet morning on a Bo-Kaap street in Cape Town"
            className="aspect-[3/4] rounded-xl"
          />
          <Photo
            src="/images/penguins.jpg"
            alt="African penguins on granite boulders at Boulders Beach"
            className="aspect-[3/4] rounded-xl sm:mt-10"
          />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-3 lg:py-24">
          {c.pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-paper/15 pt-6">
              <h3 className="font-display text-2xl font-medium">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-sage">
            {c.flagshipKicker}
          </p>
          <h2 className="mt-3 font-display text-title font-medium leading-tight tracking-tight">
            {c.flagshipTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {c.flagshipBody}
          </p>
          <Button asChild variant="primary" className="mt-6 w-full sm:w-auto">
            <Link to="/journey">
              {c.flagshipCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="overflow-hidden rounded-xl bg-paper-2">
            <Photo
              src="/images/cape-peninsula.jpg"
              alt="Cape Peninsula coastline"
              className="aspect-[16/10]"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl font-medium">{c.capeTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {c.capeBody}
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-xl bg-paper-2">
            <Photo
              src="/images/kruger-dawn.jpg"
              alt="Dawn in the Greater Kruger bushveld"
              className="aspect-[16/10]"
            />
            <div className="p-6">
              <h3 className="font-display text-2xl font-medium">
                {c.krugerTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {c.krugerBody}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <Photo
          src="/images/lodge-dusk.jpg"
          alt="Safari lodge deck at dusk"
          outline={false}
          className="absolute inset-0"
          imgClassName="no-outline"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-end lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-paper/70">
              {c.priceKicker}
            </p>
            <h2 className="mt-3 font-display text-title font-medium leading-tight text-paper">
              {c.priceTitle}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/80 sm:text-base">
              {c.priceBody}
            </p>
          </div>
          <div className="rounded-xl bg-paper/95 p-5 text-ink sm:p-6">
            <p className="font-display text-2xl font-medium leading-tight sm:text-3xl">
              {c.priceFrom}
            </p>
            <p className="mt-2 text-sm text-muted">{c.priceNote}</p>
            <Button asChild className="mt-6 w-full sm:w-auto" variant="primary">
              <Link to="/practical">{t.nav.practical}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-10 lg:py-24">
        <div className="md:order-2">
          <h2 className="font-display text-title font-medium leading-tight tracking-tight">
            {c.honestyTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {c.honestyBody}
          </p>
        </div>
        <Photo
          src="/images/protea.jpg"
          alt="King protea in South African fynbos"
          className="aspect-[4/3] rounded-xl md:order-1 md:aspect-[3/4] md:max-h-[32rem]"
        />
      </section>

      <section className="border-t border-border bg-paper-2">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-title font-medium leading-tight tracking-tight">
              {c.closeTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {c.closeBody}
            </p>
          </div>
          <Button asChild size="lg" className="w-full shrink-0 sm:w-auto">
            <Link to="/enquire">
              {c.ctaPrimary}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
