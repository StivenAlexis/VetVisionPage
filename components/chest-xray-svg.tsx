export function ChestXraySvg({
  annotated = true,
  className,
  style,
}: {
  annotated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 600 340"
      role="presentation"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <radialGradient id="chestGlow" cx="46%" cy="48%" r="70%">
          <stop offset="0%" stopColor="#0f1f33" />
          <stop offset="100%" stopColor="#03070f" />
        </radialGradient>
      </defs>
      <rect width="600" height="340" fill="url(#chestGlow)" />

      {/* Dog silhouette, lateral view, facing left */}
      <g opacity="0.85">
        <path d="M245,205 L237,275 L255,275 L258,210 Z" fill="#16233a" opacity="0.6" />
        <path d="M400,205 L395,275 L413,275 L418,208 Z" fill="#16233a" opacity="0.6" />
        <path
          d="M425,128 C460,110 490,90 498,68"
          fill="none"
          stroke="#2c3f5c"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.5"
        />
        <ellipse cx="308" cy="163" rx="128" ry="62" fill="#16233a" opacity="0.55" />
        <path d="M186,148 C165,152 150,145 138,150 L146,182 C165,178 182,180 198,178 Z" fill="#16233a" opacity="0.55" />
        <circle cx="130" cy="140" r="34" fill="#16233a" opacity="0.55" />
        <path d="M100,148 C80,150 65,152 52,152 C65,160 82,163 100,162 Z" fill="#16233a" opacity="0.55" />
        <path d="M148,112 C160,98 170,90 178,86 C172,102 165,116 156,126 Z" fill="#16233a" opacity="0.5" />
        <path d="M232,198 L222,278 L246,278 L252,202 Z" fill="#1c2c46" opacity="0.75" />
        <path d="M382,200 L376,278 L400,278 L406,203 Z" fill="#1c2c46" opacity="0.75" />
      </g>

      {/* Spine (dorsal vertebrae) */}
      <g stroke="#3a5170" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x={192 + i * 17.5}
            y={104 + Math.sin(i * 0.32) * 3}
            width="14"
            height="11"
            rx="2"
            fill="#0c1626"
          />
        ))}
      </g>

      {/* Ribs, lateral fan pattern */}
      <g fill="none" stroke="#4a6786" strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
        {Array.from({ length: 9 }).map((_, i) => {
          const xTop = 210 + i * 21;
          const xBottom = 232 + i * 15;
          return <path key={i} d={`M${xTop},114 C ${xTop - 26},150 ${xBottom - 30},175 ${xBottom},204`} />;
        })}
      </g>

      {/* Sternum */}
      <g stroke="#3a5170" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={222 + i * 16} y="203" width="12" height="8" rx="1.5" fill="#0c1626" />
        ))}
      </g>

      {/* Lung field wash */}
      <ellipse cx="330" cy="165" rx="95" ry="48" fill="#0c9ec7" opacity="0.07" />

      {/* Diaphragm */}
      <path
        d="M195,207 C230,235 270,238 305,222 C330,236 355,232 375,214"
        fill="none"
        stroke="#3f5975"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Cardiac silhouette, sitting on the sternum */}
      <g transform="rotate(-24 288 172)">
        <path
          d="M288,140 C266,140 250,158 250,178 C250,200 270,214 292,222 C310,210 322,196 322,176 C322,156 308,140 288,140 Z"
          fill="#e2e8f0"
          opacity="0.16"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
      </g>

      {annotated ? (
        <>
          {/* VHS measurement: long axis + short axis */}
          <g stroke="#34d399" strokeWidth="1.6" strokeLinecap="round">
            <line x1="309" y1="146" x2="252" y2="212" />
            <line x1="268" y1="158" x2="313" y2="188" />
          </g>
          <circle cx="309" cy="146" r="2.5" fill="#34d399" />
          <circle cx="252" cy="212" r="2.5" fill="#34d399" />

          {/* VHS count transposed onto the spine */}
          <g stroke="#34d399" strokeWidth="2">
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={i} x1={244 + i * 17.5} y1="100" x2={244 + i * 17.5} y2="106" opacity="0.85" />
            ))}
          </g>

          {/* Detection bounding box */}
          <rect
            x="196"
            y="98"
            width="176"
            height="130"
            rx="6"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeDasharray="6 5"
          />
        </>
      ) : null}
    </svg>
  );
}
