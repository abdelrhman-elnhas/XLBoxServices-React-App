import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import englishLang from "@locale/english/translation.json";
import germanLang from "@locale/german/translation.json";
import arabicLang from "@locale/arabic/translation.json";

const resources = {
  en: {
    translation: englishLang,
  },
  de: {
    translation: germanLang,
  },
  ar: {
    translation: arabicLang,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
