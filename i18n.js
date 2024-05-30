import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import hy from "./locales/hy.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    hy: { translation: hy }
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
