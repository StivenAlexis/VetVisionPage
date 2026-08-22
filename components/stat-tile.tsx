import { cn } from "@/lib/utils";

export function StatTile({
  value,
  label,
  detail,
  accent = "primary",
  size = "default",
  className,
}: {
  value: string;
  label: string;
  detail?: string;
  accent?: "primary" | "clinical";
  size?: "default" | "lg";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card/60 p-5",
        className
      )}
    >
      <p
        className={cn(
          "text-mono-nums font-semibold tracking-tight",
          size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl",
          accent === "primary" ? "text-primary" : "text-clinical"
        )}
      >
        {value}
      </p>
      <p className="mt-1.5 text-sm font-medium text-foreground">{label}</p>
      {detail ? <p className="mt-1 text-xs text-muted-foreground">{detail}</p> : null}
    </div>
  );
}
