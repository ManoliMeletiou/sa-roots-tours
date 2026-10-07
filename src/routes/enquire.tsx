import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/site/page-hero";
import { useLocale } from "@/lib/locale";

export const Route = createFileRoute("/enquire")({ component: EnquirePage });

function EnquirePage() {
  const { t } = useLocale();
  const c = t.enquire;

  return (
    <main>
      <PageHero
        image="/images/city-dusk.jpg"
        imageAlt="Cape Town city bowl at dusk"
        kicker={c.kicker}
        title={c.title}
        lede={c.lede}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-section font-medium">
            {c.stepsTitle}
          </h2>
          <ol className="mt-8 space-y-6">
            {c.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-display text-2xl font-medium tabular-nums text-sage">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-paper-2 p-1">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
