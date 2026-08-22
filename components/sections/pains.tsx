import { Clock, MapPinned, HelpCircle, Languages } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n";

const ICONS = [Clock, MapPinned, HelpCircle, Languages];

export function Pains({ dict }: { dict: Dictionary }) {
  const t = dict.pains;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card/60 p-5"
              >
                <Icon className="size-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
