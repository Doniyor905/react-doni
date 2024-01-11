import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translationEN from './languages/en.json';
import translationRU from './languages/ru.json';
import translationTR from './languages/tr.json';

// the translations
const resources = {
  eng: {
    translation: translationEN,
  },
  rus: {
    translation: translationRU,
  },
  turk: {
    translation: translationTR,
  },
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
