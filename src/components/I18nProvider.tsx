"use client";

import { ReactNode, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { createInstance, Resource } from "i18next";
import { initReactI18next } from "react-i18next";

type Props = {
  locale: string;
  resources: Resource; // { [locale]: { translation: {...} } }
  children: ReactNode;
};

export function I18nProvider({ locale, resources, children }: Props) {
  const i18n = useMemo(() => {
    const instance = createInstance();
    void instance
      .use(initReactI18next)
      .init({
        lng: locale,
        fallbackLng: "ja",
        resources,
        interpolation: { escapeValue: false },
      });
    return instance;
  }, [locale, resources]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
