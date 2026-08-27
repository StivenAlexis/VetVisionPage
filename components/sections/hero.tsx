import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { RadiographViewer } from "@/components/radiograph-viewer";
import type { Dictionary } from "@/lib/i18n";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="bg-scan-grid animate-grid-drift relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-primary"
            >
              {t.badge}
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t.headline}{" "}
              <span className="text-primary">{t.headlineAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.subheadline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
          </Reveal>

          <Reveal delay={320}>
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
          </Reveal>
        </div>

        <Reveal variant="scale-in" delay={200} className="mt-14">
          <RadiographViewer t={dict.radiograph} />
        </Reveal>
      </Container>
    </section>
  );
}
