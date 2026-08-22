import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#0B1120" />
      <path
        d="M4,9 L9,9 L11,5 L14,12.5 L16.5,9 L28,9"
        fill="none"
        stroke="#F8FAFC"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M5,17 C9,10.5 23,10.5 27,17 C23,22.5 9,22.5 5,17 Z"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16,13.5 L16,20.5" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.5,17 L19.5,17" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="17" r="1.3" fill="#F8FAFC" />
    </svg>
  );
}

export function Logo({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[15px] font-semibold tracking-tight">
          <span className="text-foreground">VET</span>
          <span className="text-primary">VISION</span>
        </span>
        {showTagline ? (
          <span className="mt-0.5 text-[9px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            AI Diagnostics
          </span>
        ) : null}
      </span>
    </span>
  );
}
