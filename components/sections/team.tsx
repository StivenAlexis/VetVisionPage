import { User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n";

export function Team({ dict }: { dict: Dictionary }) {
  const t = dict.team;

  return (
    <section id="equipo" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.roles.map((member) => (
            <div key={member.role} className="text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-dashed border-border bg-card">
                <User className="size-6 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">{member.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">{t.hiringNote}</p>
      </Container>
    </section>
  );
}
