import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { browserHistory } from 'react-router';
import { addLocaleData, IntlProvider } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import { ThemeProvider } from 'react-polymorph/lib/components';
import theme from '../theme/polymorph/theme';
// import theme from 'react-polymorph/lib/themes/simple';
import translations from '../i18n/translations';
import { parseRoute } from '../utils/routing';
import { supportedLanguages } from '../i18n';
const defaultLocale = 'en';

// https://github.com/yahoo/react-intl/wiki#loading-locale-data
addLocaleData([...en, ...de, ...ar]);

export default class Provider extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  getLocaleFromRoute() {
    const { router } = this.context;
    return parseRoute('/(:lang(/))(*rest)', router.location.pathname).lang;
  }

  isSupportedLocale(locale) {
    return supportedLanguages.includes(locale);
  }

  componentWillMount() {
    const { router } = this.context;
    const locale = this.getLocaleFromRoute();
    const isSupportedLocale = this.isSupportedLocale(locale);
    if (!isSupportedLocale && browserHistory) {
      browserHistory.push({ pathname: '/' + defaultLocale + router.location.pathname });
    }
  }

  render() {
    const { children } = this.props;
    let locale = this.getLocaleFromRoute();
    const isSupportedLocale = this.isSupportedLocale(locale);
    if (!isSupportedLocale) locale = defaultLocale;
    const readDirection = locale === 'ar' ? 'rtl' : 'ltr';
    return (
      <Fragment>
        <Head>
           <body dir={readDirection} />
        </Head>
        <ThemeProvider theme={theme}>
          <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
            {children}
          </IntlProvider>
        </ThemeProvider>
      </Fragment>
    );
  }
}
