# VetVision AI — Landing page (v1)

Landing page bilingüe (ES/EN) de VetVision AI, construida con Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui. Ver [prompt_landing_vetvision.md](./prompt_landing_vetvision.md) para el brief completo.

## Getting started

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) — redirige a `/es` (idioma por defecto). La versión en inglés vive en `/en`.

## Estructura

- `app/[lang]/` — layout raíz (fuentes, metadata por idioma, `<html lang>`) y la página única de la landing. `[lang]` es `es` o `en` (`generateStaticParams`); `/` redirige a `/es` vía `next.config.ts`.
- `lib/i18n/` — diccionarios de copy ES/EN (`dictionaries/es.ts`, `dictionaries/en.ts`) tipados contra `types.ts`. Todo el texto de la landing sale de acá, no hay copy hardcodeado en los componentes.
- `components/sections/` — una sección de la landing por archivo (hero, pains, how-it-works, market, comparison, partnership, roadmap, team, final-cta).
- `components/ui/` — componentes base de shadcn/ui (`style: base-nova`, sobre `@base-ui/react`, no Radix).
- `app/globals.css` — tokens de color de marca (paleta dark medtech de VetVision) sobre el sistema de theming de shadcn.

## Pendiente antes de producción

- **Placeholders de imagen**: la radiografía del visor (`public/canine-xray.png`) es una imagen ilustrativa generada, no una radiografía real del producto — reemplazar cuando haya una real (y recalibrar las zonas en `components/radiograph/findings-data.ts` si cambia el encuadre). Las fotos del equipo (`public/team/`) ya son reales.
- **Datos entre corchetes** (`[COMPLETAR: ...]`): ya no quedan pendientes — equipo, email de contacto, email de inversores y el link de agenda (Google Calendar) están completos.
- **Formulario de beta**: el submit está mockeado (`console.log` + confirmación inline en `components/sections/final-cta.tsx`). Conectar a un endpoint real (Formspree, Resend, etc.) antes del lanzamiento.
- **Componentes de 21st.dev**: el MCP de 21st.dev se agregó a la config del proyecto pero no llegó a estar disponible en esta sesión (los MCP agregados a mitad de sesión requieren reiniciar Claude Code para cargar sus herramientas). Los componentes de esta v1 están hechos a mano sobre shadcn/ui siguiendo sus mismas convenciones — después de reiniciar la sesión se puede usar 21st.dev para buscar/adaptar variantes alternativas.
## Deploy (Vercel + dominio propio)

El proyecto es deployable sin fricción (`npm run build` corre limpio, `metadataBase` ya apunta a `https://vetvision.com.ar`).

1. En [vercel.com](https://vercel.com), **Add New → Project** e importá el repo `StivenAlexis/VetVisionPage` desde GitHub. Vercel detecta Next.js automáticamente — no hace falta tocar ningún setting de build.
2. Una vez deployado, andá a **Project → Settings → Domains** y agregá `vetvision.com.ar` (y opcionalmente `www.vetvision.com.ar`).
3. Vercel te va a mostrar los records DNS exactos a cargar en el proveedor donde está registrado el dominio (típicamente un record `A` apuntando a `76.76.21.21` para el dominio raíz, y un `CNAME` a `cname.vercel-dns.com` para `www`) — se propagan en minutos a horas.
4. Cada `git push` a `main` dispara un nuevo deploy automático.

## Disclaimer

VetVision AI es una herramienta de apoyo diagnóstico. No reemplaza el criterio del médico veterinario — este disclaimer está siempre visible en el footer.
