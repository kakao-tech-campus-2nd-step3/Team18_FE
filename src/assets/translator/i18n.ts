import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { KO, VE } from '.';
import { userLocalStorage } from '@/utils/storage';

const resources = {
  ko: { translation: { ...KO } },
  ve: { translation: { ...VE } },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ko',
  lng: userLocalStorage.getLanguage() || 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
