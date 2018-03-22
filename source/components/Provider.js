import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { addLocaleData, IntlProvider } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import { ThemeProvider } from 'react-polymorph/lib/components';
import theme from '../theme/polymorph/theme';
// import theme from 'react-polymorph/lib/themes/simple';
import translations from '../i18n/translations';
const defaultLocale = 'en';

// https://github.com/yahoo/react-intl/wiki#loading-locale-data
addLocaleData([...en, ...de, ...ar]);

export default class Provider extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { children } = this.props;
    const { router } = this.context;
    const languageFromRoute = router.location.query.lang;
    const locale = languageFromRoute ? languageFromRoute: defaultLocale;
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
