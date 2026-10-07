import { Photo } from "@/components/site/photo";

export function PageHero({
  image,
  imageAlt,
  kicker,
  title,
  lede,
}: {
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Photo
        src={image}
        alt={imageAlt}
        outline={false}
        className="absolute inset-0"
        imgClassName="no-outline hero-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="relative mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 pb-28 pt-24 sm:min-h-[26rem] sm:px-6 sm:pb-12 sm:pt-28">
        <p className="text-xs font-medium uppercase tracking-widest text-paper/75">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-title font-medium leading-tight tracking-tight text-paper">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/85 sm:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}
