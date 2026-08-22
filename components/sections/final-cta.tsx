"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Dictionary } from "@/lib/i18n";

export function FinalCta({ t }: { t: Dictionary["finalCta"] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = Object.fromEntries(new FormData(event.currentTarget));
    // v1: mocked submit — no backend yet. Swap for a real endpoint
    // (e.g. Formspree, Resend) before launch.
    console.log("[beta-signup]", data);

    window.setTimeout(() => setStatus("success"), 600);
  }

  return (
    <section id="sumate" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} align="center" />

        <Tabs defaultValue="clinics" className="mx-auto mt-12 max-w-2xl">
          <TabsList className="mx-auto">
            <TabsTrigger value="clinics">{t.tabClinics}</TabsTrigger>
            <TabsTrigger value="investors">{t.tabInvestors}</TabsTrigger>
          </TabsList>

          <TabsContent value="clinics" className="mt-8">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">{t.clinics.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.clinics.description}
              </p>

              {status === "success" ? (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-clinical/30 bg-clinical/10 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-clinical" strokeWidth={1.75} />
                  <p className="text-sm leading-relaxed text-foreground">{t.clinics.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">{t.clinics.nameLabel}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t.clinics.namePlaceholder}
                      autoComplete="name"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="clinic">{t.clinics.clinicLabel}</Label>
                    <Input
                      id="clinic"
                      name="clinic"
                      required
                      placeholder={t.clinics.clinicPlaceholder}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">{t.clinics.emailLabel}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.clinics.emailPlaceholder}
                      autoComplete="email"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="country">{t.clinics.countryLabel}</Label>
                    <Input
                      id="country"
                      name="country"
                      required
                      placeholder={t.clinics.countryPlaceholder}
                      autoComplete="country-name"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="mt-2 h-11 sm:col-span-2"
                  >
                    {status === "submitting" ? t.clinics.submitting : t.clinics.submit}
                  </Button>
                </form>
              )}
            </div>
          </TabsContent>

          <TabsContent value="investors" className="mt-8">
            <div className="rounded-xl border border-border bg-card p-6 text-center sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">{t.investors.title}</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t.investors.description}
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="h-11 w-full sm:w-auto" render={<a href="#sumate" />}>
                  <Mail data-icon="inline-start" />
                  {t.investors.ctaPrimary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 w-full sm:w-auto"
                  render={<a href="#sumate" />}
                >
                  <CalendarClock data-icon="inline-start" />
                  {t.investors.ctaSecondary}
                </Button>
              </div>

              <p className="mt-5 text-xs text-muted-foreground/70">
                {t.investors.emailPlaceholder} · {t.investors.calendlyPlaceholder}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
