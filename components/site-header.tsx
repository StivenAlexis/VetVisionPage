"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/lib/i18n";

export function SiteHeader({ nav, lang }: { nav: Dictionary["nav"]; lang: Locale }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: nav.product, href: "#producto" },
    { label: nav.howItWorks, href: "#como-funciona" },
    { label: nav.market, href: "#mercado" },
    { label: nav.team, href: "#equipo" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-3 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-primary-foreground"
      >
        {nav.skipToContent}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle lang={lang} />
          <Button variant="outline" size="sm" render={<a href="#sumate" data-audience="investors" />}>
            {nav.ctaInvestors}
          </Button>
          <Button size="sm" render={<a href="#sumate" data-audience="clinics" />}>
            {nav.ctaBeta}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border/80 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageToggle lang={lang} />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="outline"
              render={<a href="#sumate" data-audience="investors" onClick={() => setOpen(false)} />}
            >
              {nav.ctaInvestors}
            </Button>
            <Button render={<a href="#sumate" data-audience="clinics" onClick={() => setOpen(false)} />}>
              {nav.ctaBeta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
