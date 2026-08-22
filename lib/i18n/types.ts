export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    howItWorks: string;
    market: string;
    team: string;
    ctaInvestors: string;
    ctaBeta: string;
    skipToContent: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaInvestors: string;
    ctaBeta: string;
    stats: Stat[];
    visualCaption: string;
    visualDisclaimer: string;
    zoomInLabel: string;
    zoomOutLabel: string;
  };
  pains: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    interactiveXray: {
      rawCaption: string;
      analyzedCaption: string;
      instruction: string;
      aiBadge: string;
      vhsBadgeValue: string;
      vhsBadgeRef: string;
      onImageLabels: { cardiac: string; trachea: string };
      findings: {
        box: { pill: string; detail: string };
        vhs: { pill: string; detail: string };
        traq: { pill: string; detail: string };
      };
    };
    steps: { title: string; description: string }[];
    reportExample: {
      eyebrow: string;
      title: string;
      patientLabel: string;
      patientPlaceholder: string;
      findings: { label: string; value: string; flagged: boolean }[];
      validatedBy: string;
      generatedIn: string;
    };
    modulesTitle: string;
    modules: { name: string; title: string; description: string }[];
    disclaimer: string;
  };
  market: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: Stat[];
    source: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    subtitle: string;
    subjectLabel: string;
    subject: string;
    criteria: string[];
    competitors: { name: string; values: string[] }[];
    subjectValues: string[];
    footnote: string;
  };
  partnership: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    badge: string;
    institution: string;
    location: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phases: {
      phase: string;
      timeframe: string;
      title: string;
      description: string;
      milestones: string[];
    }[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    roles: { role: string; name: string }[];
    hiringNote: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabClinics: string;
    tabInvestors: string;
    clinics: {
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      clinicLabel: string;
      clinicPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      countryLabel: string;
      countryPlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
    };
    investors: {
      title: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
      emailPlaceholder: string;
      calendlyPlaceholder: string;
    };
  };
  footer: {
    tagline: string;
    productHeading: string;
    productLinks: { label: string; href: string }[];
    contactHeading: string;
    contactPlaceholder: string;
    disclaimer: string;
    copyright: string;
  };
};
