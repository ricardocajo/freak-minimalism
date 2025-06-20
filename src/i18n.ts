import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../public/locales/en/common.json';
import ptTranslations from '../public/locales/pt/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: process.env.NODE_ENV === 'development',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: enTranslations,
      },
      pt: {
        common: ptTranslations,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
