import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "VetVision AI — AI-assisted diagnosis for veterinary X-rays",
    description:
      "VetVision AI analyzes canine and feline chest X-rays with artificial intelligence and delivers a structured report in minutes. A diagnostic support tool — it does not replace veterinary judgment.",
  },
  nav: {
    product: "Product",
    howItWorks: "How it works",
    market: "Market",
    team: "Team",
    ctaInvestors: "For investors",
    ctaBeta: "Join the beta",
    skipToContent: "Skip to content",
  },
  radiograph: {
    imageAlt: "Lateral chest X-ray of a dog, analyzed by VetVision AI",
    findingsListTitle: "Findings detected",
    regionLabel: "Region",
    descriptionLabel: "Description",
    reviewNote: "Diagnostic support finding — veterinary review recommended, not a definitive diagnosis.",
    disclaimer: "Illustrative VetVision AI product image — the result is always validated by a veterinarian.",
    severityLabels: {
      info: "Informational",
      attention: "Needs attention",
      priority: "Priority finding",
    },
    findings: [
      {
        id: "cardiomegaly",
        name: "Cardiomegaly",
        location: "Cardiac silhouette",
        description:
          "Enlarged cardiac silhouette consistent with cardiomegaly: increased sternal contact and a rounded caudal border.",
      },
      {
        id: "vhs-elevated",
        name: "Elevated VHS",
        location: "Long axis (L) + short axis (S), transposed from T4",
        description: "VHS index of 11.9, above the reference range (≤ 10.7) — consistent with cardiac enlargement.",
      },
      {
        id: "alveolar-pattern",
        name: "Alveolar pattern",
        location: "Cranial lung field",
        description: "Increased opacity consistent with an alveolar pattern to review on the lateral projection.",
      },
    ],
  },
  hero: {
    badge: "Pre-seed · MVP in development · UNNE partnership",
    headline: "An expert second opinion",
    headlineAccent: "on every X-ray, in minutes.",
    subheadline:
      "VetVision AI is an artificial intelligence system that assists veterinarians in reading canine and feline chest X-rays: it detects key findings and delivers a structured report. The veterinarian always validates the final result.",
    ctaInvestors: "For investors",
    ctaBeta: "Join the beta",
    stats: [
      { value: "2–3 min", label: "per report", detail: "vs. 15–20 min of manual reading" },
      { value: "> 0.85", label: "target AUC", detail: "on the cardiomegaly module" },
      { value: "< 2 sec", label: "per image", detail: "model inference time" },
    ],
  },
  pains: {
    eyebrow: "The problem",
    title: "Reading a chest X-ray properly takes time clinics don't always have",
    subtitle:
      "Four real frictions veterinary clinics face today when diagnosing from imaging.",
    items: [
      {
        title: "Clinical overload",
        description:
          "General practitioners see dozens of cases a day and rarely have time for a careful second read of every plate.",
      },
      {
        title: "Shortage of veterinary radiologists",
        description:
          "Finding a specialist is hard, especially in rural areas or small clinics that can't sustain that fixed cost.",
      },
      {
        title: "Diagnostic uncertainty",
        description:
          "Without a second opinion on hand, subtle findings — early cardiomegaly, a small nodule — can be missed.",
      },
      {
        title: "Cost and language as barriers",
        description:
          "Traditional human teleradiology is expensive and slow, and there are almost no AI diagnostic tools built for Spanish-speaking clinics.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "From X-ray to report, in four steps",
    subtitle:
      "VetVision AI runs on transfer learning over ResNet-50 and DenseNet-121 architectures, trained and validated on real cases.",
    steps: [
      {
        title: "Upload the X-ray",
        description:
          "The clinical team uploads the digital chest plate from the clinic's system or directly from a phone.",
      },
      {
        title: "AI analysis",
        description:
          "Transfer-learning models on ResNet-50 and DenseNet-121 process the image in under 2 seconds.",
      },
      {
        title: "Findings flagged",
        description:
          "Cardiomegaly (via the VHS index), alveolar patterns, pleural effusion, pneumothorax and masses are marked directly on the image.",
      },
      {
        title: "Report in 2–3 minutes",
        description:
          "The veterinarian reviews and validates the result before sharing it with the pet's owner. It's a support tool — the final call always belongs to the professional.",
      },
    ],
    reportExample: {
      eyebrow: "Here's an example",
      title: "The report the veterinarian receives",
      patientLabel: "Patient",
      patientPlaceholder: "Rex · Canine",
      findings: [
        { label: "Cardiomegaly", value: "VHS 11.9", flagged: true },
        { label: "Alveolar pattern", value: "Not detected", flagged: false },
        { label: "Pleural effusion", value: "Not detected", flagged: false },
        { label: "Pneumothorax", value: "Not detected", flagged: false },
      ],
      validatedBy: "Validated by: Dr. [TO FILL IN]",
      generatedIn: "Generated in 2m 14s",
    },
    modulesTitle: "Two modules, one workflow",
    modules: [
      {
        name: "VHS Module",
        title: "Cardiomegaly",
        description:
          "Measures the Vertebral Heart Score for early cardiomegaly screening.",
      },
      {
        name: "Thorax Module",
        title: "Thoracic findings",
        description:
          "Full classification of alveolar patterns, pleural effusion, pneumothorax and masses in a single pass.",
      },
    ],
    disclaimer:
      "VetVision AI is a diagnostic support tool. It does not replace the judgment or responsibility of the veterinarian.",
  },
  market: {
    eyebrow: "Market opportunity",
    title: "A fast-growing market, with Argentina leading LatAm",
    subtitle: "AI-assisted diagnosis adoption in veterinary care is just starting — and growing at double digits.",
    stats: [
      {
        value: "USD 761.67M → USD 3,169.94M",
        label: "Global veterinary AI diagnostics market",
        detail: "2025 → 2034, 17.21% CAGR",
      },
      {
        value: "21%",
        label: "of veterinarians (UK, 2025)",
        detail: "already use AI in their daily routine",
      },
      {
        value: "44%",
        label: "of that AI usage",
        detail: "is radiographic diagnosis and reporting",
      },
      {
        value: "#1 LatAm",
        label: "Argentina",
        detail: "highest projected CAGR in veterinary software, 2025–2030",
      },
    ],
    source: "Sources: VetVision AI business model, 2025.",
  },
  comparison: {
    eyebrow: "Why VetVision",
    title: "Faster than a remote specialist, cheaper than teleradiology",
    subtitle: "Benchmarked against the alternatives available to a veterinary clinic today.",
    subjectLabel: "",
    subject: "VetVision AI",
    criteria: ["Spanish-first focus", "Turnaround time", "Cost vs. teleradiology", "Local validation"],
    competitors: [
      {
        name: "SignalPET",
        values: ["No", "Minutes–hours", "Market benchmark", "No LatAm partnership"],
      },
      {
        name: "Vetology AI",
        values: ["No", "Minutes–hours", "Market benchmark", "No LatAm partnership"],
      },
      {
        name: "IDEXX Imagyst",
        values: ["No", "Minutes–hours", "Market benchmark", "No LatAm partnership"],
      },
      {
        name: "Traditional teleradiology",
        values: ["Partial", "Hours (waiting on a human specialist)", "Baseline cost", "Depends on the provider"],
      },
    ],
    subjectValues: ["Yes, native", "Seconds", "-90% cost", "Dataset & clinical validation via UNNE"],
    footnote:
      "Results in seconds instead of hours, at a cost significantly lower than traditional teleradiology.",
  },
  partnership: {
    eyebrow: "Institutional partnership",
    title: "Validated with real data, not just public benchmarks",
    description:
      "VetVision AI has a strategic partnership with the Faculty of Veterinary Sciences at the Universidad Nacional del Nordeste (UNNE) to access a real, anonymized dataset and put the system through continuous clinical validation.",
    points: [
      "Real X-ray dataset, anonymized and covered by institutional consent.",
      "Clinical validation run alongside faculty and specialists.",
      "Continuous-improvement pipeline: every new case feeds back into model training.",
    ],
    badge: "Active academic partnership",
    institution: "Faculty of Veterinary Sciences — UNNE",
    location: "Corrientes, Argentina",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "From MVP to regional expansion",
    subtitle: "Four phases, with concrete milestones in each.",
    phases: [
      {
        phase: "Phase 1",
        timeframe: "Weeks 1–16",
        title: "Technical MVP",
        description: "Initial training and validation of the VHS and Thorax modules on the UNNE partnership dataset.",
        milestones: ["Working VHS module", "Working Thorax module", "Target AUC > 0.85 in internal validation"],
      },
      {
        phase: "Phase 2",
        timeframe: "Months 4–6",
        title: "Closed beta",
        description: "First pilot clinics using VetVision AI in their real workflow.",
        milestones: ["5–10 pilot clinics", "Clinical feedback loop", "Product and report refinement"],
      },
      {
        phase: "Phase 3",
        timeframe: "Months 7–12",
        title: "Commercial launch",
        description: "Opening to paying clinics with the goal of reaching sustained traction.",
        milestones: ["25 paying clinics", "MRR target > USD 5,000", "Validated pricing model"],
      },
      {
        phase: "Phase 4",
        timeframe: "Years 2–3",
        title: "Regional expansion",
        description: "Entry into neighboring markets with strong potential demand for assisted diagnosis.",
        milestones: ["Brazil", "Chile", "Uruguay"],
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "The founding team",
    subtitle: "We're still completing the team — these are the key roles at launch.",
    roles: [
      { role: "CEO / Product", name: "Stiven Monsalvo", photo: "/team/stiven-monsalvo.jpg" },
      { role: "CTO / Lead ML Engineer", name: "Lucas Quitana", photo: "/team/lucas-quitana.png" },
      { role: "Mentor", name: "Mg. Sergio Lapertosa", photo: "/team/sergio-lapertosa.png" },
    ],
    hiringNote: "Interested in joining the founding team? Write to us at info@vetvision.com.ar",
  },
  finalCta: {
    eyebrow: "Get involved",
    title: "Two ways to be part of VetVision AI",
    subtitle: "Pick the one that fits you — veterinary clinic or investor/incubator.",
    tabClinics: "Veterinary clinics",
    tabInvestors: "Investors / incubators",
    clinics: {
      title: "Add your clinic to the closed beta",
      description:
        "Join the first 5–10 clinics testing VetVision AI in their real workflow, at no cost during the beta.",
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      clinicLabel: "Clinic",
      clinicPlaceholder: "Clinic name",
      emailLabel: "Email",
      emailPlaceholder: "you@yourclinic.com",
      countryLabel: "Country",
      countryPlaceholder: "Argentina",
      submit: "Add my clinic to the beta",
      submitting: "Sending…",
      success: "You're in! We'll reach out shortly to set up your beta access.",
    },
    investors: {
      title: "Request the full pitch deck",
      description:
        "If you represent a fund, an angel investor, or an incubator like Endeavor, let's schedule a call or send you the full materials.",
      ctaPrimary: "Request pitch deck",
      ctaSecondary: "Schedule an appointment",
      emailPlaceholder: "inversiones@vetvision.com.ar",
    },
  },
  footer: {
    tagline: "AI-assisted diagnosis for veterinary chest X-rays.",
    productHeading: "Product",
    productLinks: [
      { label: "Product", href: "#producto" },
      { label: "How it works", href: "#como-funciona" },
      { label: "Market", href: "#mercado" },
      { label: "Team", href: "#equipo" },
    ],
    contactHeading: "Contact",
    contactPlaceholder: "info@vetvision.com.ar",
    disclaimer: "Diagnostic support tool. It does not replace the judgment of a licensed veterinarian.",
    copyright: "VetVision AI © 2026",
  },
};
