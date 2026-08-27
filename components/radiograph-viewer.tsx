"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FindingOverlay, SEVERITY_DOT } from "@/components/radiograph/finding-overlay";
import { DEMO_FINDINGS } from "@/components/radiograph/findings-data";
import type { FindingData } from "@/components/radiograph/types";
import type { Dictionary } from "@/lib/i18n";

export function RadiographViewer({
  t,
  findings = DEMO_FINDINGS,
}: {
  t: Dictionary["radiograph"];
  findings?: FindingData[];
}) {
  const [activeId, setActiveId] = useState<string>(findings[0]?.id ?? "");

  const selectFinding = (id: string) => setActiveId(id);
  const textFor = (id: string) => t.findings.find((f) => f.id === id);

  const activeFinding = findings.find((f) => f.id === activeId);
  const activeText = activeFinding ? textFor(activeFinding.id) : undefined;

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <figure className="relative aspect-[1448/1086] overflow-hidden rounded-xl border border-border bg-[#050b14]">
        <Image
          src="/canine-xray.png"
          alt={t.imageAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority
        />

        <div
          aria-hidden="true"
          className="animate-radiograph-scan pointer-events-none absolute inset-x-[7%] z-10 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-55 shadow-[0_0_14px_rgba(34,211,238,0.6)]"
        />

        {findings.map((finding) => (
          <FindingOverlay
            key={finding.id}
            finding={finding}
            label={textFor(finding.id)?.name ?? finding.id}
            active={finding.id === activeId}
            onSelect={() => selectFinding(finding.id)}
            showTooltip={!finding.onImageLabel}
          />
        ))}

        {findings
          .filter((f) => f.onImageLabel)
          .map((finding) => {
            const text = textFor(finding.id);
            if (!text) return null;
            const isActive = finding.id === activeId;
            return (
              <span
                key={finding.id}
                aria-hidden="true"
                style={{
                  left: `${finding.region.x}%`,
                  top: `${finding.region.y}%`,
                }}
                className={cn(
                  "text-mono-nums pointer-events-none absolute z-10 -translate-y-[calc(100%+6px)] rounded border px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.04em] whitespace-nowrap backdrop-blur transition-colors",
                  isActive
                    ? "border-primary/50 bg-background/85 text-primary"
                    : "border-border bg-background/70 text-muted-foreground"
                )}
              >
                {text.name.toUpperCase()}
              </span>
            );
          })}
      </figure>

      <div className="flex flex-col gap-4">
        <div className="min-h-[220px] rounded-xl border border-border bg-card p-4">
          {activeFinding && activeText ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{activeText.name}</h3>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                    <span className={cn("size-1.5 rounded-full", SEVERITY_DOT[activeFinding.severity])} />
                    {t.severityLabels[activeFinding.severity]}
                  </span>
                </div>
                <span className="text-mono-nums shrink-0 text-lg font-bold text-primary">
                  {Math.round(activeFinding.confidence * 100)}%
                </span>
              </div>

              <dl className="mt-3.5 space-y-2.5 text-xs">
                <div>
                  <dt className="text-muted-foreground">{t.regionLabel}</dt>
                  <dd className="mt-0.5 text-foreground">{activeText.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t.descriptionLabel}</dt>
                  <dd className="mt-0.5 leading-relaxed text-foreground">{activeText.description}</dd>
                </div>
              </dl>

              <p className="mt-3.5 flex items-start gap-1.5 border-t border-border pt-3 text-[11px] leading-relaxed text-muted-foreground">
                <AlertTriangle className="mt-0.5 size-3.5 shrink-0" strokeWidth={1.75} />
                {t.reviewNote}
              </p>
            </>
          ) : null}
        </div>

        <div className="rounded-xl border border-border bg-card">
          <p className="border-b border-border px-4 py-3 text-xs font-semibold tracking-wide text-foreground uppercase">
            {t.findingsListTitle}
          </p>
          <ul className="divide-y divide-border">
            {findings.map((finding) => {
              const text = textFor(finding.id);
              const isActive = finding.id === activeId;
              return (
                <li key={finding.id}>
                  <button
                    type="button"
                    onClick={() => selectFinding(finding.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-xs transition-colors",
                      isActive ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-background/60"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className={cn("size-1.5 shrink-0 rounded-full", SEVERITY_DOT[finding.severity])} />
                      {text?.name}
                    </span>
                    <span className="text-mono-nums shrink-0">{Math.round(finding.confidence * 100)}%</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-center text-[11px] text-muted-foreground/70 lg:text-left">{t.disclaimer}</p>
      </div>
    </div>
  );
}
