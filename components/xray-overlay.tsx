export function XrayOverlayArt({
  boxOpacity = 1,
  vhsOpacity = 1,
  traqOpacity = 1,
  cardiacLabel,
  tracheaLabel,
  interactive = false,
  onHoverBox,
  onHoverVhs,
  onHoverTraq,
  onLeave,
}: {
  boxOpacity?: number;
  vhsOpacity?: number;
  traqOpacity?: number;
  cardiacLabel: string;
  tracheaLabel: string;
  interactive?: boolean;
  onHoverBox?: () => void;
  onHoverVhs?: () => void;
  onHoverTraq?: () => void;
  onLeave?: () => void;
}) {
  return (
    <>
      <g opacity={traqOpacity} style={{ transition: "opacity 0.25s" }}>
        <path
          d="M114,128 C242,140 332,158 424,188"
          stroke="#67e8f9"
          strokeWidth="2.4"
          strokeDasharray="1.5 8"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <text x="140" y="168" fontFamily="var(--font-mono)" fontSize="15" letterSpacing="1" fill="#67e8f9">
          {tracheaLabel}
        </text>
      </g>

      <g opacity={vhsOpacity} style={{ transition: "opacity 0.25s" }}>
        <line x1="432" y1="212" x2="396" y2="378" stroke="#34d399" strokeWidth="2.4" />
        <line x1="341" y1="311" x2="487" y2="279" stroke="#34d399" strokeWidth="2.4" />
        <circle cx="432" cy="212" r="3.5" fill="#34d399" />
        <circle cx="396" cy="378" r="3.5" fill="#34d399" />
        <circle cx="341" cy="311" r="3.5" fill="#34d399" />
        <circle cx="487" cy="279" r="3.5" fill="#34d399" />
        <text x="426" y="312" fontFamily="var(--font-mono)" fontSize="16" fill="#34d399">
          L
        </text>
        <text x="452" y="270" fontFamily="var(--font-mono)" fontSize="16" fill="#34d399">
          S
        </text>
        <line x1="331" y1="44" x2="501" y2="44" stroke="#34d399" strokeWidth="2.4" />
        <line x1="501" y1="44" x2="651" y2="44" stroke="#6ee7b7" strokeWidth="2.4" />
        <line x1="331" y1="38" x2="331" y2="50" stroke="#34d399" strokeWidth="2" />
        <line x1="501" y1="38" x2="501" y2="50" stroke="#6ee7b7" strokeWidth="2" />
        <line x1="651" y1="38" x2="651" y2="50" stroke="#6ee7b7" strokeWidth="2" />
        <text x="416" y="30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="#34d399">
          L = 6.3v
        </text>
        <text x="576" y="30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill="#6ee7b7">
          S = 5.6v
        </text>
        <line x1="331" y1="50" x2="331" y2="90" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 4" />
        <text x="322" y="88" textAnchor="end" fontFamily="var(--font-mono)" fontSize="14" fill="#34d399">
          T4
        </text>
      </g>

      <g opacity={boxOpacity} style={{ transition: "opacity 0.25s" }}>
        <rect
          x="314"
          y="188"
          width="192"
          height="208"
          rx="8"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
        <rect x="314" y="158" width="216" height="24" rx="4" fill="#050a14" opacity="0.75" />
        <text x="322" y="175" fontFamily="var(--font-mono)" fontSize="14" letterSpacing="1" fill="#22d3ee">
          {cardiacLabel}
        </text>
      </g>

      {interactive ? (
        <g style={{ cursor: "crosshair" }}>
          <rect
            x="314"
            y="188"
            width="192"
            height="208"
            fill="transparent"
            onMouseEnter={onHoverBox}
            onMouseLeave={onLeave}
          />
          <rect
            x="300"
            y="16"
            width="370"
            height="70"
            fill="transparent"
            onMouseEnter={onHoverVhs}
            onMouseLeave={onLeave}
          />
          <path
            d="M114,128 C242,140 332,158 424,188"
            stroke="transparent"
            strokeWidth="30"
            fill="none"
            style={{ pointerEvents: "stroke" }}
            onMouseEnter={onHoverTraq}
            onMouseLeave={onLeave}
          />
        </g>
      ) : null}
    </>
  );
}
