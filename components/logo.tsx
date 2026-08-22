import { useId } from "react";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `${name}-${uid}`;

  return (
    <svg
      viewBox="0 0 512 512"
      className={cn("h-8 w-8 shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id("bgGrad")} cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#070D18" />
        </radialGradient>
        <linearGradient id={id("cyanGlow")} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={id("accentGrad")} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id={id("glow")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="256" cy="256" r="256" fill={`url(#${id("bgGrad")})`} />

      <circle cx="256" cy="230" r="175" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="8 6" />
      <circle cx="256" cy="230" r="145" fill="none" stroke="#0284C7" strokeWidth="1.5" opacity="0.3" />

      <line x1="256" y1="65" x2="256" y2="90" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="256" y1="370" x2="256" y2="395" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="90" y1="230" x2="115" y2="230" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="397" y1="230" x2="422" y2="230" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      <g filter={`url(#${id("glow")})`}>
        <path
          d="M120 230 C 160 140, 352 140, 392 230 C 352 320, 160 320, 120 230 Z"
          fill="none"
          stroke={`url(#${id("cyanGlow")})`}
          strokeWidth="9"
          strokeLinejoin="round"
        />

        <path d="M 210 185 L 235 130 L 256 175" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 256 175 L 277 130 L 302 185" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

        <line x1="256" y1="180" x2="256" y2="280" stroke={`url(#${id("accentGrad")})`} strokeWidth="4" strokeLinecap="round" />
        <line x1="210" y1="230" x2="302" y2="230" stroke={`url(#${id("accentGrad")})`} strokeWidth="4" strokeLinecap="round" />

        <circle cx="256" cy="180" r="5.5" fill="#34D399" />
        <circle cx="256" cy="280" r="5.5" fill="#34D399" />
        <circle cx="210" cy="230" r="5.5" fill="#34D399" />
        <circle cx="302" cy="230" r="5.5" fill="#34D399" />

        <circle cx="256" cy="230" r="8" fill="#FFFFFF" />
      </g>
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
