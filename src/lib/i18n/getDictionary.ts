import "server-only";
import { Locale, i18nConfig } from "./config";

export async function getDictionary(locale: Locale) {
  if (!i18nConfig.locales.includes(locale)) {
    locale = i18nConfig.defaultLocale as Locale;
  }
  const mod = await import(`@/locales/${locale}.json`);
  return mod.default as Record<string, string>;
}
