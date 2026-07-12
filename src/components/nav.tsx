"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { demoHref } from "@/lib/demo";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" aria-label={site.name}>
          <Logo showSub={false} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={demoHref()} variant="primary" size="md">
            {site.hero.primaryCta}
          </ButtonLink>
        </div>

        <button
          className="grid size-10 place-items-center rounded-lg text-ink hover:bg-paper-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-ink-soft hover:bg-paper-2 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={demoHref()}
              variant="primary"
              size="lg"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {site.hero.primaryCta}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
