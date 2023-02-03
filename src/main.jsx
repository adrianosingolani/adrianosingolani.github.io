import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './locales/en.json';
import PT from './locales/pt.json';

import App from "./App";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      pt: PT,
      en: EN,
    },
    supportedLngs: ['en', 'pt'],
    // lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      // https://github.com/i18next/i18next-browser-languageDetector
      order: ['querystring', 'path', 'subdomain', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    }
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);