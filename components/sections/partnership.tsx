import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/lib/i18n";

export function Partnership({ dict }: { dict: Dictionary }) {
  const t = dict.partnership;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 p-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-12">
          <div>
            <Badge
              variant="outline"
              className="rounded-full border-clinical/30 bg-clinical/10 px-3 py-1 text-clinical"
            >
              {t.badge}
            </Badge>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground">
              {t.description}
            </p>

            <ul className="mt-6 space-y-3">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-clinical" strokeWidth={1.75} />
                  <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-border bg-background/70 p-8">
            <GraduationCap className="size-9 text-primary" strokeWidth={1.5} />
            <p className="mt-5 text-lg font-semibold text-foreground">{t.institution}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.location}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
