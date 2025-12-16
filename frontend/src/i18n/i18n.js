import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nl from './nl.json';
import en from './en.json';
import fr from './fr.json';
import tr from './tr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      nl: { translation: nl },
      en: { translation: en },
      fr: { translation: fr },
      tr: { translation: tr },
    },
    lng: 'nl', // default language
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
