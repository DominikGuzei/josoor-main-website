import React, { Component } from 'react';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import styles from './Layout.scss';
import { ROUTES } from '../../routes';
import TopMenu from './menu/TopMenu';
import LocaleAwareLink from '../shared/LocaleAwareLink';
import {
  getAlternateLanguagesTo,
  getLanguageByParentLocale, SUPPORTED_LANGUAGES,
} from '../../i18n';
import { arabicFonts, latinFonts } from '../../theme/fonts';
import environment from '../../environment';
import { getRouteToAlternateLanguage } from '../../utils/routing';
import PropTypes from 'prop-types';
import PrivacyDisclaimer from '../privacy/PrivacyDisclaimer';

const messages = defineMessages({
  impressLink: {
    id: 'layout.footer.impressLink',
    defaultMessage: 'Impress',
  },
  privacyLink: {
    id: 'layout.footer.privacyLink',
    defaultMessage: 'Privacy Statement',
  },
});

export default class Layout extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
    router: PropTypes.object.isRequired,
  };

  render() {
    const { children } = this.props;
    const { intl, router } = this.context;
    const path = router.location.pathname;
    const locale = intl.locale;
    const currentLanguage = getLanguageByParentLocale(intl.locale);
    const alternateLanguages = getAlternateLanguagesTo(currentLanguage);
    const fontsCss = currentLanguage === SUPPORTED_LANGUAGES.ARABIC ? arabicFonts : latinFonts;
    return (
      <div className={styles.layout}>
        <Head>
          <html lang={currentLanguage.parentLocale} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          {alternateLanguages.map(({ parentLocale }) => (
            <link
              rel="alternate"
              href={environment.BASE_URL + getRouteToAlternateLanguage(path, locale, parentLocale)}
              hrefLang={parentLocale}
              key={parentLocale}
            />
          ))}
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
          <style type="text/css" rel="stylesheet" cssText={fontsCss(environment.BASE_URL)} />
        </Head>
        <TopMenu />
        <div className={styles.content}>
          {children}
        </div>
        <PrivacyDisclaimer />
        <footer className={styles.footer}>
          <LocaleAwareLink to={ROUTES.IMPRESS} className={styles.impressLink}>
            {intl.formatMessage(messages.impressLink)}
          </LocaleAwareLink>
          <span className={styles.footerSeparator}>|</span>
          <LocaleAwareLink to={ROUTES.PRIVACY} className={styles.privacyLink}>
            {intl.formatMessage(messages.privacyLink)}
          </LocaleAwareLink>
        </footer>
      </div>
    );
  }
}
