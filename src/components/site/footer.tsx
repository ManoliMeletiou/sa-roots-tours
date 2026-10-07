import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { OPERATOR_EMAIL } from "@/lib/contact";
import { useLocale } from "@/lib/locale";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {t.footer.blurb}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {t.footer.explore}
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link to="/journey" className="inline-flex min-h-11 items-center hover:text-sage">
                {t.nav.journey}
              </Link>
            </li>
            <li>
              <Link to="/approach" className="inline-flex min-h-11 items-center hover:text-sage">
                {t.nav.approach}
              </Link>
            </li>
            <li>
              <Link to="/practical" className="inline-flex min-h-11 items-center hover:text-sage">
                {t.nav.practical}
              </Link>
            </li>
            <li>
              <Link to="/enquire" className="inline-flex min-h-11 items-center hover:text-sage">
                {t.nav.enquire}
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {t.footer.contact}
          </p>
          <a
            href={`mailto:${OPERATOR_EMAIL}`}
            className="mt-3 inline-flex min-h-11 items-center text-sm hover:text-sage"
          >
            {OPERATOR_EMAIL}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.notice}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © {year} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
