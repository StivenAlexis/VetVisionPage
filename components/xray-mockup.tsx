"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChestXraySvg } from "@/components/chest-xray-svg";

const THORAX_ORIGIN = "51% 50%";

export function XrayMockup({
  caption,
  vhsLabel,
  zoomInLabel,
  zoomOutLabel,
}: {
  caption: string;
  vhsLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
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
          <ChestXraySvg
            annotated
            className="h-auto w-full transition-transform duration-700 ease-out"
            style={{
              transform: zoomed ? "scale(2.3)" : "scale(1)",
              transformOrigin: THORAX_ORIGIN,
            }}
          />
        </div>
      </button>

      <div className="pointer-events-none absolute left-3 top-3 rounded border border-primary/30 bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-primary backdrop-blur">
        {vhsLabel} 10.8
      </div>
      <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded border border-border bg-background/80 px-2 py-1 text-mono-nums text-[10px] text-muted-foreground backdrop-blur">
        <span className="size-1.5 animate-pulse rounded-full bg-clinical" />
        AI · 1.4s
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
