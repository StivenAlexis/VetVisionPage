import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n";

export function Roadmap({ dict }: { dict: Dictionary }) {
  const t = dict.roadmap;

  return (
    <section className="border-t border-border bg-card/30 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-[9px] right-0 left-0 hidden h-px bg-border lg:block"
          />
          {t.phases.map((phase) => (
            <li key={phase.phase} className="relative">
              <span
                aria-hidden="true"
                className="relative z-10 block size-[9px] rounded-full bg-primary ring-4 ring-background"
              />
              <p className="text-mono-nums mt-4 text-xs font-medium text-muted-foreground">
                {phase.timeframe}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {phase.phase} · {phase.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {phase.milestones.map((milestone) => (
                  <li
                    key={milestone}
                    className="flex items-baseline gap-2 text-xs text-muted-foreground"
                  >
                    <span aria-hidden="true" className="size-1 shrink-0 rounded-full bg-clinical" />
                    {milestone}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
