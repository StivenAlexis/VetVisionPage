import "server-only";
import { es } from "./dictionaries/es";
import { en } from "./dictionaries/en";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale, Stat } from "./types";
export { locales, defaultLocale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
