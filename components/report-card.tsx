import { FileCheck2, AlertCircle, CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function ReportCard({ t }: { t: Dictionary["howItWorks"]["reportExample"] }) {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-4">
        <FileCheck2 className="size-4 text-primary" strokeWidth={1.75} />
        <span className="text-sm font-semibold text-foreground">VetVision AI · Informe</span>
      </div>

      <div className="flex items-center justify-between px-5 py-3 text-xs">
        <span className="text-muted-foreground">{t.patientLabel}</span>
        <span className="text-mono-nums text-foreground">{t.patientPlaceholder}</span>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {t.findings.map((finding) => (
          <li key={finding.label} className="flex items-center justify-between px-5 py-3">
            <span className="flex items-center gap-2 text-sm text-foreground">
              {finding.flagged ? (
                <AlertCircle className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
              ) : (
                <CheckCircle2 className="size-4 shrink-0 text-clinical" strokeWidth={1.75} />
              )}
              {finding.label}
            </span>
            <span
              className={
                finding.flagged
                  ? "text-mono-nums text-sm font-semibold text-primary"
                  : "text-mono-nums text-xs text-muted-foreground"
              }
            >
              {finding.value}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between px-5 py-4 text-xs text-muted-foreground">
        <span>{t.validatedBy}</span>
        <span className="text-mono-nums">{t.generatedIn}</span>
      </div>
    </div>
  );
}
