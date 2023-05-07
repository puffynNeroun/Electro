import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import  Backend  from "i18next-http-backend";
import { initReactI18next } from "react-i18next";



interface I18nOptions {
    fallbackLng: string;
    debug: boolean;
    detection: {
        order: string[];
        cache: string[];
    };
    interpolation: {
        escapeValue: boolean;
    };
    backend: {
        loadPath: string;
    };
    react: {
        useSuspense: boolean;
    };
}


const options: I18nOptions = {
    fallbackLng: 'ua',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
        useSuspense: false
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);
