import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { StatTile } from "@/components/stat-tile";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/i18n";

export function Market({ dict }: { dict: Dictionary }) {
  const t = dict.market;

  return (
    <section id="mercado" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="scale-in" delay={0} className="sm:col-span-2">
            <StatTile {...t.stats[0]} size="lg" />
          </Reveal>
          <Reveal variant="scale-in" delay={90}>
            <StatTile {...t.stats[1]} accent="clinical" />
          </Reveal>
          <Reveal variant="scale-in" delay={180}>
            <StatTile {...t.stats[2]} />
          </Reveal>
          <Reveal variant="scale-in" delay={270} className="sm:col-span-2 lg:col-span-4">
            <StatTile {...t.stats[3]} accent="clinical" />
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-muted-foreground/70">{t.source}</p>
      </Container>
    </section>
  );
}
