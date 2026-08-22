import { ArrowRight } from "lucide-react";
import { ChestXraySvg } from "@/components/chest-xray-svg";

export function BeforeAfter({
  rawLabel,
  analyzedLabel,
}: {
  rawLabel: string;
  analyzedLabel: string;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
      <figure className="overflow-hidden rounded-lg border border-border bg-[#03070f]">
        <ChestXraySvg annotated={false} className="h-auto w-full opacity-80 grayscale" />
        <figcaption className="border-t border-border bg-card/60 px-3 py-2 text-center text-xs font-medium text-muted-foreground">
          {rawLabel}
        </figcaption>
      </figure>

      <div
        aria-hidden="true"
        className="flex items-center justify-center text-muted-foreground sm:rotate-0"
      >
        <ArrowRight className="size-5 rotate-90 sm:rotate-0" strokeWidth={1.75} />
      </div>

      <figure className="overflow-hidden rounded-lg border border-primary/30 bg-[#03070f]">
        <ChestXraySvg annotated className="h-auto w-full" />
        <figcaption className="border-t border-primary/20 bg-primary/5 px-3 py-2 text-center text-xs font-medium text-primary">
          {analyzedLabel}
        </figcaption>
      </figure>
    </div>
  );
}
