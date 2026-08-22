import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";

export function Comparison({ dict }: { dict: Dictionary }) {
  const t = dict.comparison;

  return (
    <section className="border-t border-border bg-card/30 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <Reveal delay={100} className="mt-10 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-background/60">
                <th scope="col" className="px-4 py-3 text-left font-medium text-muted-foreground">
                  {" "}
                </th>
                {t.criteria.map((criterion) => (
                  <th
                    key={criterion}
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                  >
                    {criterion}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.competitors.map((competitor) => (
                <tr
                  key={competitor.name}
                  className="border-b border-border transition-colors last:border-b-0 hover:bg-card/60"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 text-left font-medium text-muted-foreground"
                  >
                    {competitor.name}
                  </th>
                  {competitor.values.map((value, i) => (
                    <td key={i} className="px-4 py-3.5 text-muted-foreground">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-primary/5">
                <th scope="row" className="px-4 py-3.5 text-left font-semibold text-primary">
                  {t.subject}
                </th>
                {t.subjectValues.map((value, i) => (
                  <td
                    key={i}
                    className={cn(
                      "px-4 py-3.5 font-medium text-foreground",
                      i === t.subjectValues.length - 1 && "text-clinical"
                    )}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>

        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{t.footnote}</p>
      </Container>
    </section>
  );
}
