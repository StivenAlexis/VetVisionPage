import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { XrayMockup } from "@/components/xray-mockup";
import type { Dictionary } from "@/lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="bg-scan-grid relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-primary"
            >
              {t.badge}
            </Badge>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t.headline}{" "}
              <span className="text-primary">{t.headlineAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-11 px-5"
                render={<a href="#sumate" data-audience="clinics" />}
              >
                {t.ctaBeta}
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5"
                render={<a href="#sumate" data-audience="investors" />}
              >
                {t.ctaInvestors}
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-mono-nums text-xl font-semibold text-primary sm:text-2xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                    {stat.detail ? (
                      <span className="mt-0.5 block text-[11px] text-muted-foreground/70">
                        {stat.detail}
                      </span>
                    ) : null}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <XrayMockup
              caption={t.visualCaption}
              zoomInLabel={t.zoomInLabel}
              zoomOutLabel={t.zoomOutLabel}
              xray={dict.howItWorks.interactiveXray}
            />
            <p className="mt-3 text-center text-xs text-muted-foreground/70">
              {t.visualDisclaimer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
