"use client";

import { cn } from "@/lib/utils";
import type { FindingData } from "./types";

const SEVERITY_BORDER: Record<FindingData["severity"], string> = {
  info: "border-primary/50",
  attention: "border-severity-attention/60",
  priority: "border-severity-priority/60",
};

const SEVERITY_BG: Record<FindingData["severity"], string> = {
  info: "bg-primary/5",
  attention: "bg-severity-attention/5",
  priority: "bg-severity-priority/5",
};

const SEVERITY_DOT: Record<FindingData["severity"], string> = {
  info: "bg-primary",
  attention: "bg-severity-attention",
  priority: "bg-severity-priority",
};

const SEVERITY_TEXT: Record<FindingData["severity"], string> = {
  info: "text-primary",
  attention: "text-severity-attention",
  priority: "text-severity-priority",
};

export { SEVERITY_DOT };

export function FindingOverlay({
  finding,
  label,
  active,
  onSelect,
  showTooltip = true,
}: {
  finding: FindingData;
  label: string;
  active: boolean;
  onSelect: () => void;
  /** Skip the hover tooltip when a permanent on-image label chip already shows this finding's name. */
  showTooltip?: boolean;
}) {
  const { region } = finding;
  const style = {
    left: `${region.x}%`,
    top: `${region.y}%`,
    width: region.width !== undefined ? `${region.width}%` : undefined,
    height: region.height !== undefined ? `${region.height}%` : undefined,
  };

  if (region.type === "area") {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        aria-label={label}
        style={style}
        className="group absolute cursor-pointer rounded-[40%]"
      >
        <span
          className={cn(
            "block h-full w-full rounded-[40%] blur-[3px] transition-[filter,opacity] duration-300 group-hover:blur-[2px]",
            active
              ? "opacity-90 bg-primary/18 ring-2 ring-primary/70 ring-inset blur-[1px]"
              : cn("opacity-60", SEVERITY_BG[finding.severity])
          )}
        />
        {showTooltip ? <FindingTooltip label={label} /> : null}
      </button>
    );
  }

  if (region.type === "point") {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        aria-label={label}
        style={{ left: style.left, top: style.top }}
        className="group absolute flex size-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center"
      >
        <span
          className={cn(
            "block size-2 rounded-full shadow-[0_0_6px_currentColor] transition-all duration-300",
            active
              ? "size-2.5 bg-primary text-primary shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]"
              : cn(SEVERITY_DOT[finding.severity], SEVERITY_TEXT[finding.severity])
          )}
        />
        {showTooltip ? <FindingTooltip label={label} /> : null}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={label}
      style={style}
      className={cn(
        "group absolute cursor-pointer rounded-md border transition-[box-shadow,border-color,background-color] duration-300",
        active
          ? "border-primary bg-primary/10 shadow-[0_0_24px_rgba(34,211,238,0.28)]"
          : cn("border-dashed", SEVERITY_BORDER[finding.severity], SEVERITY_BG[finding.severity], "hover:bg-primary/8")
      )}
    >
      <span
        className={cn(
          "absolute top-1.5 left-1.5 block size-1.5 rounded-full transition-colors",
          active ? "bg-primary shadow-[0_0_8px_rgba(34,211,238,0.8)]" : SEVERITY_DOT[finding.severity]
        )}
      />
      {showTooltip ? <FindingTooltip label={label} /> : null}
    </button>
  );
}

function FindingTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute -top-8 left-0 z-20 rounded border border-border bg-background/95 px-2 py-1 text-[10px] font-medium whitespace-nowrap text-foreground opacity-0 shadow-lg backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
      {label}
    </span>
  );
}
