"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  "fade-up": { hidden: "opacity-0 translate-y-4", shown: "opacity-100 translate-y-0" },
  "scale-in": { hidden: "opacity-0 scale-95", shown: "opacity-100 scale-100" },
  "scale-x": { hidden: "scale-x-0", shown: "scale-x-100" },
} as const;

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof VARIANTS;
  as?: "div" | "li";
  "aria-hidden"?: React.AriaAttributes["aria-hidden"];
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  as = "div",
  "aria-hidden": ariaHidden,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealClassName = cn(
    "duration-700 ease-out",
    variant === "scale-x" ? "origin-left transition-transform" : "transition-[opacity,transform]",
    visible ? VARIANTS[variant].shown : VARIANTS[variant].hidden,
    className
  );
  const style = { transitionDelay: visible ? `${delay}ms` : "0ms" };

  if (as === "li") {
    return (
      <li
        ref={ref as React.RefObject<HTMLLIElement>}
        className={revealClassName}
        style={style}
        aria-hidden={ariaHidden}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={revealClassName}
      style={style}
      aria-hidden={ariaHidden}
    >
      {children}
    </div>
  );
}
