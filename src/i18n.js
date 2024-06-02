import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translation.json'
import pl from './locales/pl/translation.json'
import ukr from './locales/ukr/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
      ukr: { translation: ukr },
    },
    fallbackLng: 'pl',
    lng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
