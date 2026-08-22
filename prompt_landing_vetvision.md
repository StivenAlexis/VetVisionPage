# Prompt para Claude Code — Landing Page de VetVision AI (v1)

> Copia todo el bloque de abajo (desde "ROL Y CONTEXTO" hasta el final) y pégalo como primer mensaje en Claude Code, parado en la carpeta raíz donde quieras crear el proyecto. Antes de correrlo, agregá el MCP de 21st.dev si todavía no lo hiciste:
>
> ```
> claude mcp add --transport http 21st https://21st.dev/api/mcp --header "x-api-key: 21st_sk_6ecaf19f36c1064aeab8751af7cf03ecf87506a9d21466b13206173aa032b572"
> ```

---

## ROL Y CONTEXTO

Actuá como un desarrollador frontend senior especializado en landing pages de alta conversión para startups de tecnología (Y Combinator / Endeavor style). Vas a construir la primera versión (v1) de la landing page de **VetVision AI**, una startup VetTech pre-seed que desarrolla un sistema de IA para el análisis asistido de radiografías torácicas en perros y gatos. El objetivo de esta landing es doble: (1) servir como pieza central del material que se presenta al postular a incubadoras/aceleradoras como **Endeavor** y a inversores ángeles/pre-seed, y (2) captar clínicas veterinarias interesadas en sumarse a la beta cerrada. Tiene que transmitir seriedad, rigor técnico y potencial de escalabilidad — no puede verse como un proyecto de tesis, tiene que verse como una startup real.

**Antes de escribir una sola línea de código:**

1. Leé la sección **"Skills de Anthropic registradas para este diseño"** más abajo. Ojo: la carpeta real en el repo se llama **`Anthropic/`** (mayúscula, sin errata — no `antropic/`) y contiene decenas de prompts de sistema y skills; ya se analizó completa y se preseleccionaron las que aplican puntualmente a este trabajo. Abrí y seguí esos archivos concretos — no hace falta recorrer toda la carpeta de nuevo. Priorizá sus lineamientos de estilo, estructura y proceso por sobre las instrucciones genéricas de este prompt, pero sin contradecir los requisitos de negocio de más abajo.
2. Confirmá que el MCP server `21st` está disponible (herramientas de búsqueda/generación de componentes de 21st.dev, basadas en shadcn/ui). Vas a usarlo para buscar y adaptar componentes de UI en vez de escribirlos 100% desde cero.
3. Planificá primero (lista de secciones, estructura de componentes y copy) y after eso empezá a generar código. No generes toda la landing en un solo archivo gigante.

---

## SKILLS DE ANTHROPIC REGISTRADAS PARA ESTE DISEÑO

> Análisis hecho sobre toda la carpeta `Anthropic/` (agentes de `claude-code/agents/`, skills de `claude-code/skills/`, skills de `claude-design/skills/`, prompts de sistema de `official/`, etc.). El entregable acá es **código real** (Next.js + TypeScript + Tailwind + shadcn/ui), no un artifact ni un canvas de Claude Design — así que se descartó todo lo que depende del mecanismo propio de Claude Design (`.dc.html`, `canvas.json`, panel de tweaks, el compilador de design systems en carpetas). De esas skills se rescató solo la guía de criterio/craft de diseño, que sí es portable a cualquier HTML/CSS/Tailwind.

**Usar (con lo puntual que aporta cada una):**

1. **`Anthropic/claude-code/skills/frontend-design.md`** — Guía principal de dirección estética. Da el proceso completo: brainstorm → plan (paleta de 4-6 hex, tipografías por rol, layout en ASCII) → autocrítica contra los 3 "looks" genéricos de IA (crema+serif+terracota / negro+un-acento-flúo / broadsheet con hairlines) → recién ahí construir. Usarla para fijar el sistema tipográfico (display + body + mono para stats) y evitar que el dark-mode medtech caiga en gradientes genéricos tipo SaaS.
2. **`Anthropic/claude-design/skills/hi-fi-design/SKILL.md`** — Proceso para diseño de alta fidelidad **anclado en contexto existente**, no inventado desde cero. Acá aplica directo: ya hay logo, paleta (`#22D3EE`, `#34D399`, `#050A14`...) y tono de marca definidos — la skill dice explícitamente que hay que partir de eso (nunca mockear un producto entero de cero) y mostrar avances temprano en vez de entregar todo de una.
3. **`Anthropic/claude-code/skills/design.md`** — Se usa solo el contenido de **dos subsecciones** (el resto del archivo es mecanismo de canvas/`.dc.html`, no aplica a un repo Next.js):
   - *"Landing pages and marketing artboards"*: anatomía de landing (hero con una sola promesa + un CTA repetido, prueba social, secciones de beneficio que responden dudas reales), y la regla de copy — nada de lorem ipsum ni relleno genérico, y placeholders visibles tipo `[COMPLETAR: ...]` solo para datos reales que falten (esto ya está alineado con lo que pide el prompt en la sección de ENTREGABLE).
   - *"Hi-fi mockups are rooted in context"*: chequear el layout a 375px/768px/1440px antes de dar por terminada una sección — arrancar cabezales que se rompen, grids que se aplastan, texto ilegible.
4. **`Anthropic/claude-code/skills/dataviz/SKILL.md`** (+ `references/palette.md` y `references/color-formula.md` dentro de esa misma carpeta) — Para la sección 5 (Oportunidad de mercado, stat tiles/bento grid con USD 761.67M→3,169.94M, 21%, 44%, CAGR 17.21%) y la tabla comparativa de la sección 6. Da la fórmula de color validada para series/estados y las reglas de stat-tile/KPI que evitan que los números grandes se vean como "data slop" (números sin jerarquía visual).
5. **`Anthropic/claude-code/skills/artifacts/artifact-design.md`** — Solo el checklist de **"Fundamentals for every artifact"** (el resto del archivo es específico de Artifacts, no de Next.js): tokens de color/tema con custom properties CSS (útil para el toggle ES/EN + eventual modo claro), la lista concreta de clichés de "diseño generado por IA" a evitar (Inter como fuente "segura", `rounded-lg` en todo, tarjetas con barra de acento lateral, emoji como viñetas de sección), y la regla de "structure is information" (no uses marcadores numerados 01/02/03 en el roadmap salvo que el orden realmente importe — en este caso sí importa, es un timeline, así que aplica).

**Explícitamente descartadas (mecanismo no aplica a este repo):** `claude-design/skills/wireframe`, `options` y `make-tweakable` (formato de turnos anclados `.dc.html` del canvas de Claude Design), `claude-design/skills/interactive-prototype` (prototipo descartable, acá el código es el producto final), `claude-design/skills/create-design-system` (compilador de carpetas para proyectos de Claude Design), `claude-design/skills/handoff-to-claude-code` (es el flujo inverso: Design→Code; acá ya arrancamos en Code), `claude-design/skills/frontend-design/SKILL.md` (versión más corta, redundante con la #1 de la lista de arriba).

---

## STACK TÉCNICO

- **Framework:** Next.js (App Router) + TypeScript.
- **Estilos:** Tailwind CSS.
- **Componentes UI:** shadcn/ui como base, usando el MCP de **21st.dev** para buscar/generar/adaptar componentes (hero sections, bento grids, feature cards, comparison tables, pricing cards, CTA sections, footer) en vez de reinventarlos. Priorizá componentes con animaciones sutiles (framer-motion está bien si ya viene con el componente).
- **Íconos:** lucide-react.
- **Fuentes:** una fuente sans moderna tipo Inter o Geist para el cuerpo, y opcionalmente una fuente más técnica/mono (JetBrains Mono o similar) para números, stats y elementos de "dato duro" (ej. AUC > 0.85, < 2 segundos).
- **Deploy objetivo:** Vercel (ya tengo el dominio propio, así que dejá el proyecto listo para conectar un dominio custom — no hace falta que lo configures vos, solo que el build sea deployable sin fricción).
- **Idioma:** la landing es **bilingüe (ES/EN)**. Implementá un selector de idioma simple (toggle en el header, ej. "ES / EN") con todo el copy duplicado — no hace falta i18n con librerías pesadas para esta v1, un objeto de traducciones o rutas `/en` simples alcanza. El idioma por defecto es español.

---

## IDENTIDAD VISUAL

Tengo un logo ya definido para VetVision AI que tenés que usar como fuente de verdad para la paleta y el tono visual (te lo adjunto/describo abajo; si no tenés el archivo de imagen a mano, generá una versión simplificada en SVG con esta misma composición para el header/favicon):

- Ícono: un ojo estilizado en trazo delgado color **cian/celeste neón** (`#22D3EE` aprox.), con un pico tipo "onda cardíaca" en blanco arriba y una cruz de medición (tipo VHS — vertebral heart score) en **verde** (`#34D399` aprox.) en el centro, con un punto blanco en el medio. Todo sobre fondo **azul marino muy oscuro, casi negro** (`#050A14` – `#0B1120`).
- Wordmark: "**VET**" en blanco + "**VISION**" en cian, seguido de "AI DIAGNOSTICS" en gris azulado pequeño y espaciado (letter-spacing amplio, todo mayúsculas).
- Estética general: **dark mode como default**, look "medtech / deep tech" — no colorido ni juguetón. Pensalo como punto medio entre un dashboard médico serio y una landing de startup de IA (Linear, Vercel, Anthropic.com como referencias de sobriedad; no Canva ni gradientes saturados tipo SaaS genérico).
- Paleta sugerida:
  - Fondo base: `#050A14` / `#0B1120`
  - Superficies/cards: `#0F1729` con bordes sutiles `#1E293B`
  - Acento primario (cian): `#22D3EE` / `#06B6D4`
  - Acento secundario (verde, uso puntual para "hallazgo positivo"/datos clínicos): `#34D399`
  - Texto principal: blanco / `#F1F5F9`
  - Texto secundario: `#94A3B8`
- Detalles gráficos permitidos: líneas finas tipo "escaneo" o "grid médico" de fondo, animaciones sutiles de "escaneo" sobre una imagen de radiografía torácica (placeholder está bien), micro-interacciones al hacer hover sobre stats o cards. Evitar exceso de efectos — prioridad a que se vea confiable y no "gimmicky".

---

## ESTRUCTURA DE CONTENIDO (secciones, en este orden)

Todo el copy real (textos, números, comparativas) sale del documento de modelo de negocio de VetVision AI que ya tengo — te paso los datos clave abajo para que no inventes cifras. Redactá el copy final vos (en ES y EN), pero **no alteres las cifras ni los claims**.

### 1. Header / Navbar
Logo + nombre. Links a secciones (Producto, Cómo funciona, Mercado, Equipo). Toggle de idioma ES/EN. Dos CTAs a la derecha: uno secundario "Para inversores" y uno primario "Unite a la beta" (ambos anclan a la sección de contacto/formulario, diferenciados por `data-audience` o similar para poder trackear clics distinto más adelante).

### 2. Hero
- Headline fuerte centrado en el problema + la solución. Ejemplo de dirección (no copiar literal, mejorar): "Una segunda opinión experta en cada radiografía, en segundos." / subheadline explicando qué es VetVision AI en una frase.
- Badge chico arriba del headline: algo tipo "Pre-seed · MVP en desarrollo · Alianza UNNE".
- Dos CTAs (mismo criterio dual que el navbar: inversores / clínicas).
- Visual: mockup/placeholder de una radiografía torácica con overlay de detección de IA (bounding boxes o highlight sobre corazón/pulmones), con el índice VHS marcado. Podés usar una imagen placeholder con instrucciones claras de dónde reemplazarla después.
- Mini-stats en línea justo debajo del hero: "Informe en 2-3 min (vs. 15-20 min)" / "AUC objetivo > 0.85" / "< 2 seg por imagen".

### 3. El problema (Pains)
3-4 cards cortas basadas en las frustraciones reales del cliente: sobrecarga de trabajo, falta de radiólogos veterinarios (especialmente en zonas rurales o clínicas chicas), incertidumbre diagnóstica, alto costo de la telerradiología humana, falta de herramientas en español.

### 4. Cómo funciona / Producto
Explicación en 3-4 pasos (idealmente con un componente de "steps" o "process" de 21st.dev) de cómo se usa: subir radiografía → análisis con IA (transfer learning sobre ResNet-50/DenseNet-121) → hallazgos señalados (cardiomegalia vía VHS, patrones alveolares, efusión pleural, neumotórax, masas) → informe en 2-3 min, veterinario siempre valida el resultado final (dejar explícito que es una herramienta de apoyo, no un reemplazo del profesional — esto es clave para credibilidad ética/regulatoria).

Incluí los dos módulos como mini feature-cards: **Módulo VHS** (cardiomegalia) y **Módulo Thorax** (clasificación de hallazgos completa).

### 5. Oportunidad de mercado
Sección con stats grandes (componente tipo "stats grid" o "bento" de 21st.dev), útil especialmente para la audiencia inversora:
- Mercado global de IA diagnóstica veterinaria: **USD 761.67M (2025) → USD 3,169.94M (2034), CAGR 17.21%**.
- **21%** de los veterinarios (UK, 2025) ya usa IA en su rutina diaria.
- Uso principal de esa IA: diagnóstico radiográfico e informes (**44%**).
- Argentina: **mayor CAGR proyectado de LatAm** en software veterinario (2025-2030).

### 6. Por qué VetVision (ventaja competitiva)
Tabla o grid comparativo (SignalPET, Vetology AI, IDEXX Imagyst, telerradiología tradicional) vs. VetVision AI, resaltando: primer enfoque dedicado a habla hispana, más ágil que esperar validación humana remota, costo significativamente menor que telerradiología tradicional (podés usar el dato "-90% de costo, resultado en segundos vs. horas" del documento), datos/validación local vía alianza con la UNNE.

### 7. Alianza institucional
Bloque destacado (con más peso visual, tipo "trust" section) sobre el convenio estratégico con la **Facultad de Ciencias Veterinarias de la UNNE (Corrientes, Argentina)** para dataset real anonimizado y validación clínica. Esto es una señal fuerte de credibilidad para incubadoras — dale protagonismo, no lo escondas como nota al pie.

### 8. Roadmap / Tracción (para audiencia inversora)
Timeline horizontal o vertical con las 4 fases: MVP Técnico (semanas 1-16) → Beta Cerrada (meses 4-6, 5-10 clínicas) → Lanzamiento Comercial (meses 7-12, 25 clínicas pagas, meta MRR > USD 5.000) → Expansión Regional (años 2-3, Brasil/Chile/Uruguay). Dejalo con estética de "roadmap de producto", no de gráfico financiero.

### 9. Equipo / Búsqueda de talento (opcional pero recomendado)
Grid con los roles fundadores (CEO/Product, CTO/Lead ML Engineer, Backend/Cloud Engineer, Veterinary Advisor, Business Developer). Si todavía no están todos los nombres confirmados, dejá placeholders claros tipo "[Nombre] — CEO" con foto placeholder, fácil de reemplazar.

### 10. CTA final dual
Dos bloques o dos tabs claramente diferenciados:
- **Para clínicas veterinarias:** formulario simple (nombre, clínica, email, país) con CTA "Sumar mi clínica a la beta".
- **Para inversores / incubadoras:** CTA tipo "Solicitar pitch deck" o "Agendar una llamada", con mailto o link a Calendly (dejar placeholder del link).

### 11. Footer
Logo, tagline corta, links a secciones, redes/contacto (placeholders), año y "VetVision AI © 2026". Nota chica: "Herramienta de apoyo diagnóstico. No reemplaza el criterio del médico veterinario." (importante dejar este disclaimer visible, aunque sea chico, por seriedad ética/regulatoria).

---

## REQUISITOS TÉCNICOS Y DE CALIDAD

- 100% responsive (mobile-first), probado mental/visualmente en 375px, 768px y 1440px.
- Performance: imágenes optimizadas con `next/image`, lazy loading donde corresponda, evitar librerías pesadas innecesarias.
- SEO básico: metadata (title, description, OG tags) en español e inglés según el idioma activo, favicon basado en el ícono del logo.
- Accesibilidad: contraste adecuado (ojo con el cian sobre fondo oscuro para texto pequeño — usar variantes más claras si hace falta), alt text en imágenes, navegación por teclado en el toggle de idioma y formularios.
- Los formularios de contacto pueden quedar con submit "mockeado" (console.log o toast de confirmación) en esta v1 — no hace falta backend todavía, dejalo preparado para conectar a un endpoint o servicio (ej. Formspree, Resend) después.
- Código limpio y componentizado: cada sección de la landing como su propio componente en `components/sections/`, sin todo apilado en `page.tsx`.

---

## ENTREGABLE ESPERADO DE ESTA SESIÓN

1. Proyecto Next.js inicializado y corriendo localmente (`npm run dev`) sin errores.
2. Todas las secciones listadas arriba, implementadas con componentes reales (usando 21st.dev/shadcn como base) y con el copy final en ES y EN — no lorem ipsum, no placeholders de texto (los placeholders de imagen sí están bien, marcados claramente).
3. Selector de idioma funcional.
4. Un resumen corto al final explicando: qué componentes de 21st.dev usaste y de dónde, qué placeholders de imagen quedaron pendientes de reemplazar, y los próximos pasos sugeridos para conectar el dominio propio en Vercel.

Si en algún momento te falta un dato de negocio que no está en este prompt (ej. un nombre de fundador, un link de Calendly, el nombre exacto del dominio), no lo inventes: dejá un placeholder explícito entre corchetes, tipo `[COMPLETAR: nombre CEO]`.
