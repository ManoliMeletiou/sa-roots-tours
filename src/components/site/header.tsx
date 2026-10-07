import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale";

export function Header({ overlay = false }: { overlay?: boolean }) {
  const { t, locale, setLocale } = useLocale();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 24);
  }, [pathname, locale]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = overlay && !scrolled && !open;
  const links = [
    { to: "/journey", label: t.nav.journey },
    { to: "/approach", label: t.nav.approach },
    { to: "/practical", label: t.nav.practical },
  ] as const;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,color] duration-200",
        inverted
          ? "bg-gradient-to-b from-ink/80 to-transparent text-paper"
          : "bg-paper/95 text-ink shadow-[var(--shadow-border)] backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Logo invert={inverted} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                inverted ? "hover:bg-paper/10" : "hover:bg-paper-2",
                pathname === link.to && !inverted && "bg-paper-2",
                pathname === link.to && inverted && "bg-paper/10",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <div
            className={cn(
              "flex items-center rounded-md p-0.5 text-xs font-medium ring-1",
              inverted
                ? "bg-ink/55 ring-paper/70"
                : "bg-paper-2 ring-border",
            )}
            role="group"
            aria-label="Language"
          >
            {(["en", "nl"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={cn(
                  "min-h-9 min-w-9 rounded-sm px-2 uppercase tracking-wider transition-colors duration-150",
                  locale === code
                    ? inverted
                      ? "bg-paper text-ink"
                      : "bg-ink text-paper"
                    : inverted
                      ? "text-paper hover:bg-paper/15"
                      : "text-muted hover:text-ink",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <Button
            asChild
            size="sm"
            variant={inverted ? "invert" : "primary"}
            className="inline-flex sm:inline-flex"
          >
            <Link to="/enquire">{t.nav.enquire}</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-md lg:hidden",
              inverted ? "bg-paper text-ink" : "bg-paper-2 text-ink",
            )}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] z-30 bg-paper text-ink sm:top-[calc(5rem+env(safe-area-inset-top))] lg:hidden">
          <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
            <div className="mb-8 flex items-center gap-2 sm:hidden">
              {(["en", "nl"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  className={cn(
                    "min-h-11 min-w-14 rounded-md px-3 text-sm font-medium uppercase tracking-wider",
                    locale === code
                      ? "bg-ink text-paper"
                      : "bg-paper-2 text-muted",
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild size="lg" className="mb-4 w-full">
                <Link to="/enquire">{t.nav.enquire}</Link>
              </Button>
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-display text-title font-medium leading-tight"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="mt-auto max-w-sm text-sm text-muted">{t.prelaunch}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
