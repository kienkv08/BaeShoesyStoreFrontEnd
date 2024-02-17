import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../assets/lang/en.json";
import { APP_LOCALES, Locales } from "../common/constants/global.constant";

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Locales.EN,
  fallbackLng: Locales.EN,
  supportedLngs: APP_LOCALES,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
