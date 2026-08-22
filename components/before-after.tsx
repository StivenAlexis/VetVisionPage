import { ArrowRight } from "lucide-react";
import { ChestXrayArt } from "@/components/chest-xray-svg";
import { InteractiveXray } from "@/components/interactive-xray";
import type { Dictionary } from "@/lib/i18n";

export function BeforeAfter({ t }: { t: Dictionary["howItWorks"]["interactiveXray"] }) {
  return (
    <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[1fr_auto_1.35fr]">
      <figure className="overflow-hidden rounded-lg border border-border bg-[#03070f]">
        <svg viewBox="0 0 880 500" role="img" aria-label={t.rawCaption} className="block h-auto w-full opacity-80 grayscale">
          <ChestXrayArt />
        </svg>
        <figcaption className="border-t border-border bg-card/60 px-3 py-2 text-center text-xs font-medium text-muted-foreground">
          {t.rawCaption}
        </figcaption>
      </figure>

      <div aria-hidden="true" className="flex items-center justify-center py-6 text-muted-foreground sm:py-0 sm:pt-32">
        <ArrowRight className="size-5 rotate-90 sm:rotate-0" strokeWidth={1.75} />
      </div>

      <InteractiveXray t={t} />
    </div>
  );
}
