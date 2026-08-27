import { User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import type { Dictionary } from "@/lib/i18n";

export function Team({ dict }: { dict: Dictionary }) {
  const t = dict.team;

  return (
    <section id="equipo" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mx-auto mt-12 grid max-w-lg gap-5 sm:grid-cols-2">
          {t.roles.map((member, i) => (
            <Reveal key={member.role} delay={i * 100}>
              <div className="group h-full rounded-lg border border-border bg-card/60 p-6 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-dashed border-border bg-card transition-[transform,border-color] duration-300 group-hover:scale-105 group-hover:border-primary/50">
                  <User className="size-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{member.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">{t.hiringNote}</p>
      </Container>
    </section>
  );
}
