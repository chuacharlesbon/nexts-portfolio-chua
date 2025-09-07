export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "ja"],
} as const;
export const fallbackLng: Locale = "en";
export type Locale = typeof i18nConfig.locales[number];
