"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const LABELS: Record<Locale, string> = { es: "ES", en: "EN" };

function swapLocale(pathname: string, target: Locale) {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export function LanguageToggle({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5 text-xs font-medium"
      role="group"
      aria-label="Idioma / Language"
    >
      {(["es", "en"] as Locale[]).map((locale) => (
        <Link
          key={locale}
          href={swapLocale(pathname, locale)}
          aria-current={lang === locale ? "true" : undefined}
          className={cn(
            "rounded-[calc(var(--radius-md)-2px)] px-2 py-1 transition-colors",
            lang === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {LABELS[locale]}
        </Link>
      ))}
    </div>
  );
}
