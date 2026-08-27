import { ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { ReportCard } from "@/components/report-card";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/i18n";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const t = dict.howItWorks;

  return (
    <section id="producto" className="border-t border-border bg-card/30 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <ol id="como-funciona" className="mt-14 grid scroll-mt-24 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 90} className="relative">
              <span className="text-mono-nums text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < t.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-1.5 hidden h-px w-8 bg-border lg:block"
                />
              ) : null}
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {t.reportExample.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{t.reportExample.title}</h3>
        </Reveal>
        <Reveal variant="scale-in" delay={100} className="mt-6">
          <ReportCard t={t.reportExample} />
        </Reveal>

        <h3 className="mt-16 text-sm font-semibold tracking-wide text-foreground uppercase">
          {t.modulesTitle}
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.modules.map((mod, i) => (
            <Reveal key={mod.name} delay={i * 90}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-clinical/40">
                <span className="text-xs font-semibold tracking-wide text-clinical uppercase">
                  {mod.name}
                </span>
                <h4 className="mt-2 text-base font-semibold text-foreground">{mod.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-background/60 p-4">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
          <p className="text-sm leading-relaxed text-muted-foreground">{t.disclaimer}</p>
        </Reveal>
      </Container>
    </section>
  );
}
