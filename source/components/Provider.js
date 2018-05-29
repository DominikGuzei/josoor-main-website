import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import translations from '../i18n/translations';
import { parseRoute } from '../utils/routing';
import {
  defaultLanguage,
  setupLocaleData,
  getLanguageByLocale,
  SUPPORTED_LANGUAGES,
  SUPPORTED_LOCALES
} from '../i18n';

setupLocaleData();

export default class Provider extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static isSupportedLocale(locale) {
    return SUPPORTED_LOCALES.includes(locale);
  }

  getLocaleFromRoute() {
    const { router } = this.context;
    return parseRoute('/(:lang(/))(*rest)', router.location.pathname).lang;
  }

  componentWillMount() {
    const { router } = this.context;
    // If the Facebook crawler visits the website with ?fb_locale=ll_CC param
    // then we redirect to the correct locale to make multi-lang posts possible
    const fbLocale = router.location.query.fb_locale;
    if (fbLocale) {
      const fbLang = getLanguageByLocale(fbLocale);
      browserHistory.push({ pathname: '/' + fbLang.parentLocale });
    } else {
      const locale = this.getLocaleFromRoute();
      const isSupportedLocale = Provider.isSupportedLocale(locale);
      if (!isSupportedLocale && browserHistory) {
        browserHistory.push({ pathname: '/' + defaultLanguage.parentLocale + router.location.pathname });
      }
    }
  }

  render() {
    const { children } = this.props;
    let locale = this.getLocaleFromRoute();
    const isSupportedLocale = Provider.isSupportedLocale(locale);
    if (!isSupportedLocale) locale = defaultLanguage.parentLocale;
    const readDirection = locale === SUPPORTED_LANGUAGES.ARABIC.parentLocale ? 'rtl' : 'ltr';
    return (
      <Fragment>
        <Head>
           <body dir={readDirection} />
        </Head>
        <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
          {children}
        </IntlProvider>
      </Fragment>
    );
  }
}
