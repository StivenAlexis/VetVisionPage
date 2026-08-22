"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChestXrayArt } from "@/components/chest-xray-svg";
import { XrayOverlayArt } from "@/components/xray-overlay";
import type { Dictionary } from "@/lib/i18n";

const THORAX_ORIGIN = "44% 55%";

export function XrayMockup({
  caption,
  zoomInLabel,
  zoomOutLabel,
  xray,
}: {
  caption: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  xray: Dictionary["howItWorks"]["interactiveXray"];
}) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <figure className="relative overflow-hidden rounded-xl border border-border bg-[#03070f]">
      <div
        aria-hidden="true"
        className="animate-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0"
      />

      <button
        type="button"
        onClick={() => setZoomed((v) => !v)}
        aria-pressed={zoomed}
        aria-label={zoomed ? zoomOutLabel : zoomInLabel}
        className="group block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-pressed:cursor-zoom-out"
      >
        <div className="overflow-hidden" role="img" aria-label={caption}>
          <svg
            viewBox="0 0 880 500"
            className="h-auto w-full transition-transform duration-700 ease-out"
            style={{
              transform: zoomed ? "scale(2.1)" : "scale(1)",
              transformOrigin: THORAX_ORIGIN,
            }}
          >
            <ChestXrayArt />
            <XrayOverlayArt
              cardiacLabel={xray.onImageLabels.cardiac}
              tracheaLabel={xray.onImageLabels.trachea}
            />
          </svg>
        </div>
      </button>

      <div className="pointer-events-none absolute bottom-14 left-3 rounded border border-primary/30 bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-primary backdrop-blur">
        {xray.vhsBadgeValue}
      </div>
      <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded border border-border bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-muted-foreground backdrop-blur">
        <span className="size-1.5 animate-pulse rounded-full bg-clinical" />
        {xray.aiBadge}
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] text-muted-foreground backdrop-blur transition-opacity",
          zoomed ? "opacity-0" : "opacity-100"
        )}
      >
        <ZoomIn className="size-3" strokeWidth={1.75} />
        {zoomInLabel}
      </div>
      {zoomed ? (
        <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] text-muted-foreground backdrop-blur">
          <ZoomOut className="size-3" strokeWidth={1.75} />
          {zoomOutLabel}
        </div>
      ) : null}

      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  );
}
