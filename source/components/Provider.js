import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { addLocaleData, IntlProvider } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import { ApolloProvider } from 'react-apollo';
import { setupApolloClient } from '../api/apolloClient';
import { ThemeProvider } from 'react-css-themr';
import { theme } from '../theme/polymorph/theme';
import translations from '../i18n/translations';
import { ROUTES } from '../routes';
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
      <div>
        <Head>
           <body dir={readDirection} />
        </Head>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={setupApolloClient()}>
            <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
              {children}
            </IntlProvider>
          </ApolloProvider>
        </ThemeProvider>
      </div>
    );
  }
}
