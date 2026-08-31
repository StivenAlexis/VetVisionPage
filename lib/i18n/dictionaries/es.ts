import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "VetVision AI — Diagnóstico asistido por IA para radiografías veterinarias",
    description:
      "VetVision AI analiza radiografías torácicas caninas y felinas con inteligencia artificial y entrega un informe estructurado en minutos. Herramienta de apoyo diagnóstico, no reemplaza el criterio veterinario.",
  },
  nav: {
    product: "Producto",
    howItWorks: "Cómo funciona",
    market: "Mercado",
    team: "Equipo",
    ctaInvestors: "Para inversores",
    ctaBeta: "Unite a la beta",
    skipToContent: "Saltar al contenido",
  },
  radiograph: {
    imageAlt: "Radiografía torácica lateral de un perro, analizada por VetVision AI",
    findingsListTitle: "Hallazgos detectados",
    regionLabel: "Región",
    descriptionLabel: "Descripción",
    reviewNote: "Hallazgo de apoyo diagnóstico — revisión veterinaria recomendada, no es un diagnóstico definitivo.",
    disclaimer: "Imagen ilustrativa del producto VetVision AI — el resultado siempre lo valida un veterinario.",
    severityLabels: {
      info: "Informativo",
      attention: "Requiere atención",
      priority: "Hallazgo prioritario",
    },
    findings: [
      {
        id: "cardiomegaly",
        name: "Cardiomegalia",
        location: "Silueta cardíaca",
        description:
          "Aumento de la silueta cardíaca compatible con cardiomegalia: contacto esternal aumentado y borde caudal redondeado.",
      },
      {
        id: "vhs-elevated",
        name: "VHS elevado",
        location: "Eje largo (L) + eje corto (S), transpuestos desde T4",
        description:
          "Índice VHS de 11.9, por encima de la referencia (≤ 10.7) — compatible con agrandamiento cardíaco.",
      },
      {
        id: "alveolar-pattern",
        name: "Patrón alveolar",
        location: "Campo pulmonar craneal",
        description: "Aumento de opacidad compatible con un patrón alveolar a revisar en la proyección lateral.",
      },
    ],
  },
  hero: {
    badge: "Pre-seed · MVP en desarrollo · Alianza UNNE",
    headline: "Una segunda opinión experta",
    headlineAccent: "en cada radiografía, en minutos.",
    subheadline:
      "VetVision AI es un sistema de inteligencia artificial que asiste a veterinarios en la lectura de radiografías torácicas caninas y felinas: detecta hallazgos clave y entrega un informe estructurado. El veterinario siempre valida el resultado final.",
    ctaInvestors: "Para inversores",
    ctaBeta: "Unite a la beta",
    stats: [
      { value: "2–3 min", label: "por informe", detail: "vs. 15–20 min de lectura manual" },
      { value: "> 0.85", label: "AUC objetivo", detail: "en el módulo de cardiomegalia" },
      { value: "< 2 seg", label: "por imagen", detail: "tiempo de inferencia del modelo" },
    ],
  },
  pains: {
    eyebrow: "El problema",
    title: "Leer una radiografía torácica bien lleva tiempo que no siempre hay",
    subtitle:
      "Cuatro fricciones reales que enfrentan hoy las clínicas veterinarias al diagnosticar por imágenes.",
    items: [
      {
        title: "Sobrecarga de trabajo",
        description:
          "Los veterinarios generales atienden decenas de consultas por día y rara vez tienen el tiempo para una segunda lectura detallada de cada placa.",
      },
      {
        title: "Escasez de radiólogos veterinarios",
        description:
          "Conseguir un radiólogo especialista es difícil, sobre todo en zonas rurales o en clínicas chicas que no pueden sostener ese costo fijo.",
      },
      {
        title: "Incertidumbre diagnóstica",
        description:
          "Sin una segunda opinión a mano, hallazgos sutiles —una cardiomegalia incipiente, un nódulo pequeño— pueden pasar desapercibidos.",
      },
      {
        title: "Costo e idioma como barrera",
        description:
          "La telerradiología humana tradicional es cara y lenta, y casi no existen herramientas de IA diagnóstica pensadas para clínicas de habla hispana.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "De la radiografía al informe, en cuatro pasos",
    subtitle:
      "VetVision AI se apoya en transfer learning sobre arquitecturas ResNet-50 y DenseNet-121, entrenadas y validadas sobre casos reales.",
    steps: [
      {
        title: "Subir radiografía",
        description:
          "El equipo clínico carga la placa torácica digital desde el sistema de la clínica o directamente desde el celular.",
      },
      {
        title: "Análisis con IA",
        description:
          "Los modelos de transfer learning sobre ResNet-50 y DenseNet-121 procesan la imagen en menos de 2 segundos.",
      },
      {
        title: "Hallazgos señalados",
        description:
          "Cardiomegalia (vía índice VHS), patrones alveolares, efusión pleural, neumotórax y masas quedan marcados directamente sobre la imagen.",
      },
      {
        title: "Informe en 2–3 minutos",
        description:
          "El veterinario revisa y valida el resultado antes de compartirlo con el tutor de la mascota. Es una herramienta de apoyo: la decisión final siempre es del profesional.",
      },
    ],
    reportExample: {
      eyebrow: "Así se ve",
      title: "El informe que recibe el veterinario",
      patientLabel: "Paciente",
      patientPlaceholder: "Firulais · Canino",
      findings: [
        { label: "Cardiomegalia", value: "VHS 11.9", flagged: true },
        { label: "Patrón alveolar", value: "No detectado", flagged: false },
        { label: "Efusión pleural", value: "No detectado", flagged: false },
        { label: "Neumotórax", value: "No detectado", flagged: false },
      ],
      validatedBy: "Validado por: Dr./Dra. [COMPLETAR]",
      generatedIn: "Generado en 2m 14s",
    },
    modulesTitle: "Dos módulos, un mismo flujo de trabajo",
    modules: [
      {
        name: "Módulo VHS",
        title: "Cardiomegalia",
        description:
          "Mide el índice cardíaco vertebral (Vertebral Heart Score) para el screening temprano de cardiomegalia.",
      },
      {
        name: "Módulo Thorax",
        title: "Hallazgos torácicos",
        description:
          "Clasificación completa de patrones alveolares, efusión pleural, neumotórax y masas en una sola pasada.",
      },
    ],
    disclaimer:
      "VetVision AI es una herramienta de apoyo diagnóstico. No reemplaza el criterio ni la responsabilidad del médico veterinario.",
  },
  market: {
    eyebrow: "Oportunidad de mercado",
    title: "Un mercado en expansión, con la Argentina a la cabeza en LatAm",
    subtitle:
      "La adopción de IA diagnóstica en veterinaria recién empieza — y crece a doble dígito.",
    stats: [
      {
        value: "USD 761,67M → USD 3.169,94M",
        label: "Mercado global de IA diagnóstica veterinaria",
        detail: "2025 → 2034, CAGR 17,21%",
      },
      {
        value: "21%",
        label: "de los veterinarios (Reino Unido, 2025)",
        detail: "ya usa IA en su rutina diaria",
      },
      {
        value: "44%",
        label: "de ese uso de IA",
        detail: "es diagnóstico radiográfico e informes",
      },
      {
        value: "#1 LatAm",
        label: "Argentina",
        detail: "mayor CAGR proyectado en software veterinario, 2025–2030",
      },
    ],
    source: "Fuentes: modelo de negocio VetVision AI, 2025.",
  },
  comparison: {
    eyebrow: "Por qué VetVision",
    title: "Más rápido que un especialista remoto, más barato que la telerradiología",
    subtitle: "Comparado contra las alternativas disponibles hoy para una clínica veterinaria.",
    subjectLabel: "",
    subject: "VetVision AI",
    criteria: ["Enfoque en habla hispana", "Tiempo de respuesta", "Costo vs. telerradiología", "Validación local"],
    competitors: [
      {
        name: "SignalPET",
        values: ["No", "Minutos–horas", "Referencia de mercado", "Sin alianza en LatAm"],
      },
      {
        name: "Vetology AI",
        values: ["No", "Minutos–horas", "Referencia de mercado", "Sin alianza en LatAm"],
      },
      {
        name: "IDEXX Imagyst",
        values: ["No", "Minutos–horas", "Referencia de mercado", "Sin alianza en LatAm"],
      },
      {
        name: "Telerradiología tradicional",
        values: ["Parcial", "Horas (espera de un especialista humano)", "Costo base", "Depende del proveedor"],
      },
    ],
    subjectValues: ["Sí, nativo", "Segundos", "-90% de costo", "Dataset y validación clínica vía UNNE"],
    footnote:
      "Resultado en segundos vs. horas de espera, con un costo significativamente menor al de la telerradiología tradicional.",
  },
  partnership: {
    eyebrow: "Alianza institucional",
    title: "Validado con datos reales, no solo con benchmarks públicos",
    description:
      "VetVision AI tiene un convenio estratégico con la Facultad de Ciencias Veterinarias de la Universidad Nacional del Nordeste (UNNE) para acceder a un dataset real anonimizado y someter el sistema a validación clínica continua.",
    points: [
      "Dataset de radiografías reales, anonimizado y con consentimiento institucional.",
      "Validación clínica conducida junto a docentes y especialistas de la facultad.",
      "Pipeline de mejora continua: cada nuevo caso retroalimenta el entrenamiento del modelo.",
    ],
    badge: "Alianza académica activa",
    institution: "Facultad de Ciencias Veterinarias — UNNE",
    location: "Corrientes, Argentina",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "De MVP a expansión regional",
    subtitle: "Cuatro fases, con hitos concretos en cada una.",
    phases: [
      {
        phase: "Fase 1",
        timeframe: "Semanas 1–16",
        title: "MVP técnico",
        description:
          "Entrenamiento y validación inicial de los módulos VHS y Thorax sobre el dataset de la alianza UNNE.",
        milestones: ["Módulo VHS funcional", "Módulo Thorax funcional", "AUC objetivo > 0.85 en validación interna"],
      },
      {
        phase: "Fase 2",
        timeframe: "Meses 4–6",
        title: "Beta cerrada",
        description: "Primeras clínicas piloto usando VetVision AI en su flujo de trabajo real.",
        milestones: ["5–10 clínicas piloto", "Ciclo de feedback clínico", "Ajuste de producto e informe"],
      },
      {
        phase: "Fase 3",
        timeframe: "Meses 7–12",
        title: "Lanzamiento comercial",
        description: "Apertura a clínicas pagas con el objetivo de alcanzar tracción sostenida.",
        milestones: ["25 clínicas pagas", "Meta de MRR > USD 5.000", "Modelo de precios validado"],
      },
      {
        phase: "Fase 4",
        timeframe: "Años 2–3",
        title: "Expansión regional",
        description: "Salida a mercados vecinos con alta demanda potencial de diagnóstico asistido.",
        milestones: ["Brasil", "Chile", "Uruguay"],
      },
    ],
  },
  team: {
    eyebrow: "Equipo",
    title: "El equipo fundador",
    subtitle: "Estamos completando el equipo — estos son los roles clave del arranque.",
    roles: [
      { role: "CEO / Product", name: "Stiven Monsalvo", photo: "/team/stiven-monsalvo.jpg" },
      { role: "CTO / Lead ML Engineer", name: "Lucas Quitana", photo: "/team/lucas-quitana.jpg" },
      { role: "Mentor", name: "Mg. Sergio Lapertosa", photo: "/team/sergio-lapertosa.png" },
    ],
    hiringNote: "¿Te interesa sumarte al equipo fundador? Escribinos a info@vetvision.com.ar.",
  },
  finalCta: {
    eyebrow: "Sumate",
    title: "Dos formas de ser parte de VetVision AI",
    subtitle: "Elegí la que te corresponde — clínica veterinaria o inversor/incubadora.",
    tabClinics: "Clínicas veterinarias",
    tabInvestors: "Inversores / incubadoras",
    clinics: {
      title: "Sumá tu clínica a la beta cerrada",
      description:
        "Sumate a las primeras 5–10 clínicas que van a probar VetVision AI en su flujo de trabajo real, sin costo durante la beta.",
      nameLabel: "Nombre y apellido",
      namePlaceholder: "Tu nombre",
      clinicLabel: "Clínica",
      clinicPlaceholder: "Nombre de la clínica",
      emailLabel: "Email",
      emailPlaceholder: "vos@tuclinica.com",
      countryLabel: "País",
      countryPlaceholder: "Argentina",
      submit: "Sumar mi clínica a la beta",
      submitting: "Enviando…",
      success: "¡Listo! Te vamos a contactar a la brevedad para coordinar el acceso a la beta.",
    },
    investors: {
      title: "Solicitá el pitch deck completo",
      description:
        "Si representás un fondo, un ángel inversor o una incubadora como Endeavor, coordinemos una llamada o te enviamos el material completo.",
      ctaPrimary: "Solicitar pitch deck",
      ctaSecondary: "Agendar una cita",
      emailPlaceholder: "inversiones@vetvision.com.ar",
    },
  },
  footer: {
    tagline: "Diagnóstico asistido por IA para radiografías torácicas veterinarias.",
    productHeading: "Producto",
    productLinks: [
      { label: "Producto", href: "#producto" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Mercado", href: "#mercado" },
      { label: "Equipo", href: "#equipo" },
    ],
    contactHeading: "Contacto",
    contactPlaceholder: "info@vetvision.com.ar",
    disclaimer: "Herramienta de apoyo diagnóstico. No reemplaza el criterio del médico veterinario.",
    copyright: "VetVision AI © 2026",
  },
};
