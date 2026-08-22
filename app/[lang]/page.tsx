import { notFound } from "next/navigation";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Pains } from "@/components/sections/pains";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Market } from "@/components/sections/market";
import { Comparison } from "@/components/sections/comparison";
// Partnership (UNNE alliance) section is temporarily removed from the page — see components/sections/partnership.tsx
import { Roadmap } from "@/components/sections/roadmap";
import { Team } from "@/components/sections/team";
import { FinalCta } from "@/components/sections/final-cta";

function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export default async function LandingPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <SiteHeader nav={dict.nav} lang={lang} />
      <main id="main-content" className="flex-1">
        <Hero dict={dict} />
        <Pains dict={dict} />
        <HowItWorks dict={dict} />
        <Market dict={dict} />
        <Comparison dict={dict} />
        <Roadmap dict={dict} />
        <Team dict={dict} />
        <FinalCta t={dict.finalCta} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
