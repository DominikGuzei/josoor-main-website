import React from "react";
import Head from "react-helmet";
import { Link } from "react-router";
import { IntlProvider } from 'react-intl';
// import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'react-css-themr';
// import { setupApolloClient } from '../../api/apolloClient';
import styles from './Layout.scss';
import { theme } from '../../theme/polymorph/theme';
import translations from '../../i18n/translations';
// import ProfileMenuItem from './menu/ProfileMenuItem';
const locale = 'en-US';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {/*<ApolloProvider client={setupApolloClient()}>*/}
      <IntlProvider {...{ locale, key: locale, messages: translations[locale] }}>
        <div>
          <Head>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <div className={styles.topMenu}>
            <div className={styles.itemsLeft}>
              <Link to="/" className={styles.homeLink}>Home</Link>
            </div>
            <div className={styles.itemsRight}>
              {/*<ProfileMenuItem />*/}
              {/*<Link to="/blog" className={styles.blogLink}>Blog</Link>*/}
            </div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
          <footer className={styles.footer}>
            <Link to="/impress" className={styles.impressLink}>Impress</Link>
          </footer>
        </div>
      </IntlProvider>
    {/*</ApolloProvider>*/}
  </ThemeProvider>
);
