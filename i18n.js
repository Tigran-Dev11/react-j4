import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../public/local/en/en.json';
import ru from '../public/local/ru/ru.json';
import hy from '../public/local/hy/hy.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      hy: {
        translation: hy
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
