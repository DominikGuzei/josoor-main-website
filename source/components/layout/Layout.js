import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from "react-helmet";
import { browserHistory, Link } from 'react-router';
import { addLocaleData, IntlProvider, intlShape } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import { ApolloProvider } from 'react-apollo';
import { setupApolloClient } from '../../api/apolloClient';
import { ThemeProvider } from 'react-css-themr';
import styles from './Layout.scss';
import { theme } from '../../theme/polymorph/theme';
import translations from '../../i18n/translations';
import ProfileMenuItem from './menu/ProfileMenuItem';
import { ROUTES } from '../../routes';
const defaultLocale = 'en';

// https://github.com/yahoo/react-intl/wiki#loading-locale-data
addLocaleData([...en, ...de]);

export default class Layout extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    const { router } = this.context;
    const languageFromRoute = router.location.query.lang;
    const locale = languageFromRoute ? languageFromRoute: defaultLocale;
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={setupApolloClient()}>
          <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
            <div>
              <Head>
                <html lang={locale}/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
              </Head>
              <div className={styles.topMenu}>
                <div className={styles.itemsLeft}>
                  <Link to={ROUTES.INDEX} className={styles.homeLink}>Home</Link>
                </div>
                <div className={styles.itemsRight}>
                  <Link to={ROUTES.BLOG.INDEX} className={styles.blogLink}>Blog</Link>
                  <ProfileMenuItem/>
                </div>
              </div>
              <div className={styles.content}>
                {children}
              </div>
              <footer className={styles.footer}>
                <Link to={ROUTES.IMPRESS} className={styles.impressLink}>Impress</Link>
              </footer>
            </div>
          </IntlProvider>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}
