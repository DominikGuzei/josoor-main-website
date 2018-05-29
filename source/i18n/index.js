import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import de from 'react-intl/locale-data/de';
import { values, find, without } from 'lodash';

export const SUPPORTED_LANGUAGES = {
  ARABIC: {
    locale: 'ar_AR',
    parentLocale: 'ar',
  },
  ENGLISH: {
    locale: 'en_US',
    parentLocale: 'en',
  },
  GERMAN: {
    locale: 'de_DE',
    parentLocale: 'de',
  },
};

export const SUPPORTED_LOCALES = values(SUPPORTED_LANGUAGES).map((lang) => {
  return lang.parentLocale;
});

export const defaultLanguage = SUPPORTED_LANGUAGES.ENGLISH;

export const setupLocaleData = () => {
  // https://github.com/yahoo/react-intl/wiki#loading-locale-data
  addLocaleData([...en, ...de, ...ar]);
  addLocaleData(SUPPORTED_LANGUAGES.ARABIC);
  addLocaleData(SUPPORTED_LANGUAGES.GERMAN);
  addLocaleData(SUPPORTED_LANGUAGES.ENGLISH);
};

export const getLanguageByLocale = (locale) => {
  return values(SUPPORTED_LANGUAGES).find((lang) => lang.locale === locale);
};

export const getLanguageByParentLocale = (parentLocale) => {
  return values(SUPPORTED_LANGUAGES).find((lang) => lang.parentLocale === parentLocale);
};

export const getAlternateLanguagesTo = (language) => {
  return without(values(SUPPORTED_LANGUAGES), language);
};
