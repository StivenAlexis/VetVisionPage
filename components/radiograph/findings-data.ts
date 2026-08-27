import type { FindingData } from "./types";

/**
 * Demo findings for the radiograph viewer. This is illustrative data standing
 * in for a real inference result — swap this array for whatever a live
 * VetVision AI API call returns and everything downstream (overlays, list,
 * panel) updates automatically; nothing here is hardcoded into the markup.
 *
 * Kept to 3 findings on purpose (one per module the product ships — VHS /
 * Thorax — plus the cardiac box) so the viewer reads as a focused demo
 * rather than a cluttered inventory. Add more here (and matching text in the
 * i18n dictionaries' radiograph.findings) when there's room to show them.
 *
 * Regions are calibrated by eye against the full, uncropped
 * /public/canine-xray.png (1448×1086) — the viewer matches that image's
 * native aspect ratio so these percentages map directly to it. Nudge
 * x/y/width/height (all percent) if the source image ever changes.
 */
export const DEMO_FINDINGS: FindingData[] = [
  {
    id: "cardiomegaly",
    confidence: 0.97,
    severity: "priority",
    onImageLabel: false,
    region: { type: "bounding-box", x: 44, y: 29, width: 11, height: 33 },
  },
  {
    id: "vhs-elevated",
    confidence: 0.94,
    severity: "priority",
    onImageLabel: false,
    region: { type: "point", x: 51, y: 13 },
  },
  {
    id: "alveolar-pattern",
    confidence: 0.84,
    severity: "attention",
    onImageLabel: true,
    region: { type: "area", x: 33, y: 33, width: 15, height: 24 },
  },
];
