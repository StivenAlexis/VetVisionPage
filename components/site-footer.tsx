import { Logo } from "@/components/logo";
import type { Dictionary } from "@/lib/i18n";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-foreground uppercase">
              {dict.footer.productHeading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {dict.footer.productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-foreground uppercase">
              {dict.footer.contactHeading}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">{dict.footer.contactPlaceholder}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">{dict.footer.copyright}</p>
          <p className="max-w-md text-xs text-muted-foreground/90">{dict.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
