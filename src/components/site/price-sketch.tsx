import { useState } from "react";
import { useLocale } from "@/lib/locale";

const MID_BAND = 4100;

function formatEur(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "nl" ? "nl-NL" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PriceSketch() {
  const { t, locale } = useLocale();
  const c = t.practical;
  const [guests, setGuests] = useState(8);
  const total = guests * MID_BAND;

  return (
    <div className="rounded-xl bg-paper p-5 sm:p-8">
      <div>
        <p className="font-display text-4xl font-medium leading-none tracking-tight text-ink sm:text-display">
          {formatEur(MID_BAND, locale)}
        </p>
        <p className="mt-2 text-sm text-muted">{c.priceUnit}</p>
        <p className="mt-3 text-xs leading-relaxed text-muted">{c.sketchNote}</p>
      </div>
      <label className="mt-8 block">
        <span className="flex items-center justify-between text-sm font-medium text-ink-soft">
          <span>{c.guestsLabel}</span>
          <span className="tabular-nums text-ink">{guests}</span>
        </span>
        <input
          type="range"
          min={6}
          max={12}
          step={1}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-3 h-11 w-full cursor-pointer accent-sage"
        />
        <span className="mt-1 flex justify-between text-xs text-muted">
          <span>6</span>
          <span>12</span>
        </span>
      </label>
      <dl className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">
            {c.perPerson}
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium tabular-nums">
            {formatEur(MID_BAND, locale)}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-muted">
            {c.indicativeTotal}
          </dt>
          <dd className="mt-1 font-display text-2xl font-medium tabular-nums">
            {formatEur(total, locale)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
