export const i18nConfig = {
  defaultLocale: "ja",
  locales: ["en", "ja"],
} as const;
export const fallbackLng: Locale = "ja";
export type Locale = typeof i18nConfig.locales[number];
