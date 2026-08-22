import { useId } from "react";

/**
 * Lateral canine thoracic radiograph — pure artwork, no <svg> wrapper of its
 * own so callers can layer it inside one shared <svg viewBox="0 0 880 500">
 * together with XrayOverlayArt. Gradient/filter ids are namespaced per
 * instance (useId) since this renders more than once on the page.
 */
export function ChestXrayArt() {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `${name}-${uid}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <>
      <defs>
        <radialGradient id={id("bgGlow")} cx="46%" cy="48%" r="72%">
          <stop offset="0%" stopColor="#0c1624" />
          <stop offset="100%" stopColor="#020409" />
        </radialGradient>
        <radialGradient id={id("heartGrad")} cx="45%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#e9f0f6" />
          <stop offset="100%" stopColor="#9fb2c2" />
        </radialGradient>
        <radialGradient id={id("vig")} cx="50%" cy="48%" r="68%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="75%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000814" stopOpacity="0.55" />
        </radialGradient>
        <filter id={id("fSoft")}>
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={id("fMed")}>
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={id("fBone")}>
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
        <filter id={id("fHeart")}>
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id={id("grain")} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={7} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.8  0 0 0 0 0.9  0 0 0 0 1  0 0 0 0.06 0"
          />
        </filter>
      </defs>

      <rect width="880" height="500" fill={url("bgGlow")} />
      <path
        d="M0,55 C240,30 620,32 880,60 L880,455 C600,472 240,470 0,448 Z"
        fill="#6c8095"
        opacity="0.13"
        filter={url("fSoft")}
      />
      <rect x="0" y="30" width="880" height="66" fill="#7f93a6" opacity="0.13" filter={url("fSoft")} />
      <path
        d="M240,120 C320,102 520,98 660,108 L702,120 C665,200 600,320 552,390 L302,390 C258,300 240,200 240,120 Z"
        fill="#01040a"
        opacity="0.5"
        filter={url("fMed")}
      />
      <path
        d="M706,96 C668,190 596,308 550,398 C542,436 540,468 542,500 L880,500 L880,96 Z"
        fill="#97aabc"
        opacity="0.17"
        filter={url("fSoft")}
      />
      <ellipse cx="800" cy="270" rx="42" ry="30" fill="#05080d" opacity="0.3" filter={url("fMed")} />
      <path
        d="M160,120 L300,130 L290,388 L175,380 Z"
        fill="#8ea1b3"
        opacity="0.13"
        filter={url("fSoft")}
      />

      <g stroke="#b7c8d8" fill="none" strokeLinecap="round" filter={url("fBone")}>
        <path d="M436,218 C500,180 560,140 610,112" strokeWidth="3.4" opacity="0.22" />
        <path d="M438,224 C510,205 580,190 646,178" strokeWidth="3" opacity="0.2" />
        <path d="M440,232 C505,245 565,262 622,286" strokeWidth="3.2" opacity="0.2" />
        <path d="M436,238 C480,275 520,310 552,345" strokeWidth="2.6" opacity="0.18" />
        <path d="M430,214 C390,180 350,155 305,138" strokeWidth="3" opacity="0.15" />
      </g>
      <circle cx="520" cy="200" r="3" fill="#c6d5e2" opacity="0.25" />
      <circle cx="560" cy="255" r="2.5" fill="#c6d5e2" opacity="0.22" />

      <path
        d="M110,128 C240,140 330,158 422,188"
        stroke="#020509"
        strokeWidth="15"
        fill="none"
        opacity="0.7"
        filter={url("fMed")}
      />
      <path
        d="M110,121 C240,133 332,151 425,182"
        stroke="#8fa4b6"
        strokeWidth="1.6"
        fill="none"
        opacity="0.28"
      />
      <path
        d="M110,135 C242,147 328,165 418,194"
        stroke="#8fa4b6"
        strokeWidth="1.6"
        fill="none"
        opacity="0.28"
      />
      <ellipse cx="428" cy="194" rx="10" ry="7" fill="#04080e" opacity="0.7" />

      <path
        d="M428,200 C356,198 320,252 328,312 C334,360 366,384 402,388 C448,384 484,342 492,290 C499,238 484,203 428,200 Z"
        fill={url("heartGrad")}
        opacity="0.48"
        filter={url("fHeart")}
        stroke="#e4ecf3"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      <path
        d="M424,224 C376,224 350,262 356,306 C360,340 382,358 406,362 C438,358 462,330 468,294 C473,258 462,226 424,224 Z"
        fill="#eef4f9"
        opacity="0.16"
        filter={url("fMed")}
      />
      <path
        d="M488,296 C520,296 545,300 560,306"
        stroke="#c2d2df"
        strokeWidth="9"
        opacity="0.14"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M702,98 C662,190 594,306 550,396"
        stroke="#dbe4ee"
        strokeWidth="3"
        fill="none"
        opacity="0.55"
        filter={url("fBone")}
      />
      <path
        d="M684,110 C646,196 586,308 540,394"
        stroke="#dbe4ee"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        filter={url("fBone")}
      />

      <g filter={url("fBone")}>
        <path
          d="M214,66 C258,64 306,82 326,96 L274,230 C247,192 221,128 214,66 Z"
          fill="#cfdae6"
          opacity="0.16"
          stroke="#dfe8f1"
          strokeWidth="1.4"
          strokeOpacity="0.3"
        />
        <path d="M232,86 C255,130 276,168 296,206" stroke="#dfe8f1" strokeWidth="3.5" opacity="0.28" />
        <path
          d="M284,232 C252,286 224,338 200,390"
          stroke="#cfdae6"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.24"
        />
        <path
          d="M300,240 C274,292 250,344 228,396"
          stroke="#cfdae6"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.13"
        />
        <circle cx="286" cy="232" r="14" fill="#cfdae6" opacity="0.3" />
      </g>

      <g
        id={id("ribset")}
        fill="none"
        stroke="#c2d0dd"
        strokeWidth="4.6"
        strokeLinecap="round"
        opacity="0.32"
        filter={url("fBone")}
      >
        <path d="M272,118 C280,190 300,300 326,384" />
        <path d="M309,118 C317,190 337,300 363,384" />
        <path d="M346,118 C354,192 374,300 400,384" />
        <path d="M383,118 C391,192 411,302 437,386" />
        <path d="M420,118 C428,192 448,302 474,386" />
        <path d="M457,118 C465,192 485,302 511,386" />
        <path d="M494,118 C502,192 522,300 548,382" />
        <path d="M531,118 C539,190 559,296 585,376" />
        <path d="M568,118 C576,188 596,290 622,368" />
        <path d="M605,118 C613,186 633,284 659,358" />
      </g>
      <use href={`#${id("ribset")}`} transform="translate(12,7)" opacity="0.5" />

      <g fill="#cfdae6" opacity="0.5" filter={url("fBone")}>
        <rect x="240" y="390" width="24" height="11" rx="4" />
        <rect x="271" y="390" width="24" height="11" rx="4" />
        <rect x="302" y="390" width="24" height="11" rx="4" />
        <rect x="333" y="390" width="24" height="11" rx="4" />
        <rect x="364" y="390" width="24" height="11" rx="4" />
        <rect x="395" y="390" width="24" height="11" rx="4" />
        <rect x="426" y="390" width="24" height="11" rx="4" />
        <rect x="457" y="392" width="30" height="7" rx="3" />
      </g>

      <g filter={url("fBone")}>
        <g fill="#cfdae6" opacity="0.5" stroke="#e8eff6" strokeWidth="0.8" strokeOpacity="0.35">
          <rect x="196" y="106" width="23" height="20" rx="3" />
          <rect x="223" y="101" width="23" height="20" rx="3" />
          <rect x="250" y="98" width="23" height="20" rx="3" />
          <rect x="277" y="96" width="23" height="20" rx="3" />
          <rect x="304" y="95" width="23" height="20" rx="3" />
          <rect x="331" y="94" width="23" height="20" rx="3" />
          <rect x="358" y="93" width="23" height="20" rx="3" />
          <rect x="385" y="92" width="23" height="20" rx="3" />
          <rect x="412" y="92" width="23" height="20" rx="3" />
          <rect x="439" y="92" width="23" height="20" rx="3" />
          <rect x="466" y="92" width="23" height="20" rx="3" />
          <rect x="493" y="93" width="23" height="20" rx="3" />
          <rect x="520" y="94" width="23" height="20" rx="3" />
          <rect x="547" y="95" width="23" height="20" rx="3" />
          <rect x="574" y="96" width="23" height="20" rx="3" />
          <rect x="601" y="97" width="23" height="20" rx="3" />
        </g>
        <g stroke="#cfdae6" strokeWidth="5" strokeLinecap="round" opacity="0.34">
          <line x1="260" y1="100" x2="272" y2="74" />
          <line x1="287" y1="98" x2="299" y2="72" />
          <line x1="314" y1="97" x2="326" y2="71" />
          <line x1="341" y1="96" x2="353" y2="70" />
          <line x1="368" y1="95" x2="380" y2="69" />
          <line x1="395" y1="94" x2="407" y2="68" />
          <line x1="422" y1="94" x2="434" y2="68" />
          <line x1="449" y1="94" x2="461" y2="68" />
          <line x1="476" y1="94" x2="488" y2="68" />
          <line x1="503" y1="95" x2="512" y2="73" />
          <line x1="530" y1="96" x2="539" y2="74" />
          <line x1="557" y1="97" x2="566" y2="75" />
          <line x1="584" y1="98" x2="593" y2="76" />
          <line x1="611" y1="99" x2="620" y2="77" />
        </g>
      </g>

      <path d="M40,42 C300,18 620,20 870,52" stroke="#9db0c0" strokeWidth="2" opacity="0.12" fill="none" />
      <path
        d="M120,452 C360,470 640,462 870,428"
        stroke="#9db0c0"
        strokeWidth="2"
        opacity="0.1"
        fill="none"
      />

      <rect width="880" height="500" filter={url("grain")} opacity="0.45" />
      <rect width="880" height="500" fill={url("vig")} />

      <text x="52" y="86" fontFamily="var(--font-mono)" fontSize="24" fill="#dfe8f1" opacity="0.45">
        R
      </text>
      <text
        x="20"
        y="484"
        fontFamily="var(--font-mono)"
        fontSize="12"
        letterSpacing="2"
        fill="#94a3b8"
        opacity="0.4"
      >
        LAT DER · CANINO · 75 kV / 6.3 mAs
      </text>
    </>
  );
}
