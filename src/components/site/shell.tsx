import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Toaster } from "sonner";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale";

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, locale } = useLocale();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showBar = pathname !== "/enquire";

  useEffect(() => {
    const pages = t.meta.pages;
    const title =
      pathname === "/"
        ? pages.home
        : pathname === "/journey"
          ? pages.journey
          : pathname === "/approach"
            ? pages.approach
            : pathname === "/practical"
              ? pages.practical
              : pathname === "/enquire"
                ? pages.enquire
                : pages.missing;
    document.title = title;
    document.documentElement.lang = locale;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
  }, [pathname, locale, t]);

  return (
    <div
      className={cn(
        "min-h-svh bg-paper text-ink",
        showBar && "pb-24 sm:pb-0",
      )}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header overlay />
      <div id="content">{children}</div>
      <Footer />
      {showBar ? <EnquireBar /> : null}
      <Toaster
        position="bottom-center"
        toastOptions={{
          className:
            "font-sans border-border bg-paper text-ink shadow-[var(--shadow-border)]",
        }}
      />
    </div>
  );
}

function EnquireBar() {
  const { t } = useLocale();

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-paper/95 p-3 backdrop-blur-sm sm:hidden">
      <div className="pb-[env(safe-area-inset-bottom)]">
        <Button asChild size="lg" className="w-full">
          <Link to="/enquire">
            {t.nav.enquire}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}