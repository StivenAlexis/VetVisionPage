export type FindingOverlayType = "bounding-box" | "point" | "area";
export type FindingSeverity = "info" | "attention" | "priority";

/**
 * Position/shape of a finding on the radiograph, in percent of the image
 * frame — not pixels — so overlays stay correctly placed at any viewer size.
 */
export type FindingRegion = {
  type: FindingOverlayType;
  /** percent from the left edge of the radiograph frame */
  x: number;
  /** percent from the top edge of the radiograph frame */
  y: number;
  /** percent width — required for "bounding-box" and "area" */
  width?: number;
  /** percent height — required for "bounding-box" and "area" */
  height?: number;
};

/**
 * Structural data for one AI finding — the shape a real inference API would
 * return. No display copy here on purpose: names/descriptions are bilingual
 * and live in the i18n dictionaries, looked up by `id`.
 */
export type FindingData = {
  id: string;
  confidence: number;
  severity: FindingSeverity;
  region: FindingRegion;
  /**
   * Whether this finding also gets its own floating label chip drawn on the
   * radiograph. Findings the base image already illustrates (e.g. the
   * cardiac silhouette box baked into this demo photo) can skip it to avoid
   * a duplicate label; anything not already visible in the image should set
   * this to true.
   */
  onImageLabel: boolean;
};

/** Bilingual display copy for one finding, matched to FindingData by id. */
export type FindingText = {
  id: string;
  name: string;
  location: string;
  description: string;
};
