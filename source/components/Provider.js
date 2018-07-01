import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import GoogleAnalytics from './GoogleAnalytics.js';
import translations from '../i18n/translations';
import { parseRoute } from '../utils/routing';
import ThemeProvider from 'react-polymorph/lib/components/ThemeProvider';
import PrivacyProvider from './privacy/PrivacyProvider';
import { PrivacyContext } from './privacy/PrivacyContext';
import theme from '../theme/polymorph/theme';
import {
  defaultLanguage,
  setupLocaleData,
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
    return parseRoute('/(:language(/))(*rest)', router.location.pathname).language;
  }

  componentWillMount() {
    const { router } = this.context;
    const locale = this.getLocaleFromRoute();
    const isSupportedLocale = Provider.isSupportedLocale(locale);
    if (!isSupportedLocale && browserHistory) {
      browserHistory.push({ pathname: '/' + defaultLanguage.parentLocale + router.location.pathname });
    }
  }

  render() {
    const { children } = this.props;
    let locale = this.getLocaleFromRoute();
    const isSupportedLocale = Provider.isSupportedLocale(locale);
    if (!isSupportedLocale) locale = defaultLanguage.parentLocale;
    const readDirection = locale === SUPPORTED_LANGUAGES.ARABIC.parentLocale ? 'rtl' : 'ltr';
    return (
      <PrivacyProvider>
        <Head>
           <body dir={readDirection} />
        </Head>
        <ThemeProvider theme={theme}>
          <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
              {children}
          </IntlProvider>
        </ThemeProvider>
        <PrivacyContext.Consumer>
          {privacySettings => privacySettings.userHasGivenConsent && <GoogleAnalytics />}
        </PrivacyContext.Consumer>
      </PrivacyProvider>
    );
  }
}
