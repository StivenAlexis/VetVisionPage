import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { StatTile } from "@/components/stat-tile";
import type { Dictionary } from "@/lib/i18n";

export function Market({ dict }: { dict: Dictionary }) {
  const t = dict.market;

  return (
    <section id="mercado" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatTile
            {...t.stats[0]}
            size="lg"
            className="sm:col-span-2"
          />
          <StatTile {...t.stats[1]} accent="clinical" />
          <StatTile {...t.stats[2]} />
          <StatTile {...t.stats[3]} accent="clinical" className="sm:col-span-2 lg:col-span-4" />
        </div>

        <p className="mt-6 text-xs text-muted-foreground/70">{t.source}</p>
      </Container>
    </section>
  );
}
