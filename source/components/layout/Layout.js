import React, { Component } from 'react';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import styles from './Layout.scss';
import { ROUTES } from '../../routes';
import TopMenu from './menu/TopMenu';
import LocaleAwareLink from '../shared/LocaleAwareLink';
import {
  getLanguageByParentLocale,
} from '../../i18n';

const messages = defineMessages({
  impressLink: {
    id: 'layout.footer.impressLink',
    defaultMessage: '!!!Impress',
  },
});

export default class Layout extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { children } = this.props;
    const { intl } = this.context;
    const currentLanguage = getLanguageByParentLocale(intl.locale);
    return (
      <div className={styles.layout}>
        <Head>
          <html lang={currentLanguage.parentLocale} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:locale" content={currentLanguage.locale} />
          <style type="text/css" cssText={`
            @font-face {
              font-family: 'Tisa-Sans-Regular';
              src: url('/fonts/tisa-pro/tisa-sans-pro-regular.woff2') format('woff2'),
              url('/fonts/tisa-pro/tisa-sans-pro-regular.woff') format('woff');
            }

            @font-face {
              font-family: 'Tisa-Sans-Light';
              src: url('/fonts/tisa-pro/tisa-sans-pro-light.woff2') format('woff2'),
              url('/fonts/tisa-pro/tisa-sans-pro-light.woff') format('woff');
            }

            @font-face {
              font-family: 'Tisa-Sans-Bold';
              src: url('/fonts/tisa-pro/tisa-sans-pro-bold.woff2') format('woff2'),
              url('/fonts/tisa-pro/tisa-sans-pro-bold.woff') format('woff');
            }

            @font-face {
              font-family: 'Tisa-Sans-Medium-Italic';
              src: url('/fonts/tisa-pro/tisa-sans-pro-medium-italic.woff2') format('woff2'),
              url('/fonts/tisa-pro/TisaSansPro-MediumItalic.woff') format('woff');
            }
            body {
              font-family: 'Tisa-Sans-Regular', Arial, Helvetica, sans-serif;
            }
          `} />
        </Head>
        <TopMenu />
        <div className={styles.content}>
          {children}
        </div>
        <footer className={styles.footer}>
          <LocaleAwareLink to={ROUTES.IMPRESS} className={styles.impressLink}>
            {intl.formatMessage(messages.impressLink)}
          </LocaleAwareLink>
        </footer>
      </div>
    );
  }
}
