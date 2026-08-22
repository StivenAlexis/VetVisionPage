"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChestXrayArt } from "@/components/chest-xray-svg";
import { XrayOverlayArt } from "@/components/xray-overlay";
import type { Dictionary } from "@/lib/i18n";

type Finding = "box" | "vhs" | "traq";

const ACCENT: Record<Finding, string> = {
  box: "text-primary border-primary/40 bg-primary/10",
  vhs: "text-clinical border-clinical/40 bg-clinical/10",
  traq: "text-accent-foreground border-accent-foreground/40 bg-accent-foreground/10",
};

export function InteractiveXray({ t }: { t: Dictionary["howItWorks"]["interactiveXray"] }) {
  const [active, setActive] = useState<Finding | null>(null);
  const clear = () => setActive(null);
  const dim = (k: Finding) => (active && active !== k ? 0.15 : 1);

  const pills: { key: Finding; label: string }[] = [
    { key: "vhs", label: t.findings.vhs.pill },
    { key: "box", label: t.findings.box.pill },
    { key: "traq", label: t.findings.traq.pill },
  ];

  return (
    <figure className="relative overflow-hidden rounded-lg border border-primary/30 bg-[#03070f]">
      <div
        aria-hidden="true"
        className="animate-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0"
      />

      <svg viewBox="0 0 880 500" role="img" aria-label={t.analyzedCaption} className="block h-auto w-full">
        <ChestXrayArt />
        <XrayOverlayArt
          boxOpacity={dim("box")}
          vhsOpacity={dim("vhs")}
          traqOpacity={dim("traq")}
          cardiacLabel={t.onImageLabels.cardiac}
          tracheaLabel={t.onImageLabels.trachea}
          interactive
          onHoverBox={() => setActive("box")}
          onHoverVhs={() => setActive("vhs")}
          onHoverTraq={() => setActive("traq")}
          onLeave={clear}
        />
      </svg>

      <div className="pointer-events-none absolute bottom-14 right-3 z-10 rounded border border-primary/30 bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-primary backdrop-blur">
        {t.vhsBadgeValue} <span className="text-destructive">▲</span>{" "}
        <span className="text-muted-foreground">{t.vhsBadgeRef}</span>
      </div>
      <div className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded border border-border bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-muted-foreground backdrop-blur">
        <span className="size-1.5 animate-pulse rounded-full bg-clinical" />
        {t.aiBadge}
      </div>

      <figcaption className="border-t border-primary/20 bg-primary/5 px-3 py-2 text-center text-xs font-medium text-primary">
        {t.analyzedCaption}
      </figcaption>

      <div className="border-t border-border p-3">
        <div className="flex flex-wrap gap-1.5">
          {pills.map((pill) => (
            <button
              key={pill.key}
              type="button"
              onMouseEnter={() => setActive(pill.key)}
              onMouseLeave={clear}
              onFocus={() => setActive(pill.key)}
              onBlur={clear}
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                active === pill.key ? ACCENT[pill.key] : "border-border text-muted-foreground"
              )}
            >
              {pill.label}
            </button>
          ))}
        </div>
        <p className="mt-3 min-h-10 text-xs leading-relaxed text-muted-foreground">
          {active ? t.findings[active].detail : t.instruction}
        </p>
      </div>
    </figure>
  );
}
