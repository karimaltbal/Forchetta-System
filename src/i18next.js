import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./component/locales/en.json"
import ar from "./component/locales/ar.json"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        ar: {
            translation: ar
        },
    },
    lng: localStorage.getItem("lng") || "en", 

    interpolation: {
        escapeValue: false, 
    },
});
