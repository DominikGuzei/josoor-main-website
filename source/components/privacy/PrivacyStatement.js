import React, { Component } from 'react';
import Head from "react-helmet";
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';
import styles from './PrivacyStatement.scss';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import { PrivacyContext } from './PrivacyContext.js';
import { Checkbox } from 'react-polymorph/lib/components/Checkbox';
import { SwitchSkin } from 'react-polymorph/lib/skins/simple/SwitchSkin';

const messages = defineMessages({
  title: {
    id: 'privacy.title',
    defaultMessage: 'Privacy | Josoor',
  },
  headline: {
    id: 'privacy.headline',
    defaultMessage: 'Privacy Statement',
  },
  intro: {
    id: 'privacy.intro',
    defaultMessage: `
      Here at Josoor we take your privacy seriously. We will send as little information
      as possible to third party services and only if you allow us to do so.
    `
  },
  settingsHeadline: {
    id: 'privacy.settings.headline',
    defaultMessage: 'Your Current Privacy Settings'
  },
  settingsIntro: {
    id: 'privacy.settings.intro',
    defaultMessage: `
      Here you can decide whether you want to help us improve our
      website by saving cookies and collecting anonymized usage statistics:
    `
  },
  settingsAllowedLabel: {
    id: 'privacy.settings.allowed',
    defaultMessage: 'Cookies are being saved and anonymous usage statistics collected.'
  },
  settingsRefusedLabel: {
    id: 'privacy.settings.refused',
    defaultMessage: 'No cookies or personal information is saved or collected.'
  },
  whatHeadline: {
    id: 'privacy.what.headline',
    defaultMessage: 'What Data is Being Collected?'
  },
  whatIntro: {
    id: 'privacy.what.intro',
    defaultMessage: `
      In general we are collecting as little data as possible about you
      and try to anonymize data where possible.
    `
  },
  whatGoogleAnalyticsHeadline: {
    id: 'privacy.what.googleAnalytics.headline',
    defaultMessage: `GoogleAnalytics`
  },
  whatGoogleAnalyticsText: {
    id: 'privacy.what.googleAnalytics.text',
    defaultMessage: `
      In order to better understand how our users are interacting with the Josoor Website, 
      we use <a href="https://www.google.com/intl/de/analytics/">Google Analytics</a> to track 
      basic data like which pages you visit and from which other websites you have been directed here. 
      We do not transmit personal data to Google Analytics. If you want to know more about how
      Google is using the collected data, please read the <a href="https://privacy.google.com/">
      Google Privacy Website</a>
    `
  },
  whatFacebookHeadline: {
    id: 'privacy.what.facebook.headline',
    defaultMessage: `Facebook`
  },
  whatFacebookText: {
    id: 'privacy.what.facebook.text',
    defaultMessage: `
      In order to let you directly like or share any page of our website we are 
      providing you with Facebook buttons. We are not in control of the data that
      Facebook might collect about you. Please read the <a href="https://www.facebook.com/about/privacy">
      Facebook Privacy Policy</a> to get more information. 
    `
  },
});

export default class PrivacyStatement extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <div>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
        </Head>
        <div className={styles.header} />
        <div className={styles.privacy}>
          <div className={styles.text}>
            <img className={styles.josoorLogo} src={josoorLogo} />
            <h1>{intl.formatMessage(messages.headline)}</h1>
            <p>{intl.formatMessage(messages.intro)}</p>

            <h2>{intl.formatMessage(messages.settingsHeadline)}</h2>
            <p>{intl.formatMessage(messages.settingsIntro)}</p>
            <PrivacyContext.Consumer>
              {privacySettings => (
                <Checkbox
                  className={styles.consentToggle}
                  label={privacySettings.userHasGivenConsent ? (
                    intl.formatMessage(messages.settingsAllowedLabel)
                  ) : (
                    intl.formatMessage(messages.settingsRefusedLabel)
                  )}
                  checked={privacySettings.userHasGivenConsent}
                  onChange={privacySettings.toggle}
                  themeId={IDENTIFIERS.SWITCH}
                  skin={SwitchSkin}
                />
              )}
            </PrivacyContext.Consumer>

            <h2>{intl.formatMessage(messages.whatHeadline)}</h2>
            <p>{intl.formatMessage(messages.whatIntro)}</p>

            <h3>{intl.formatMessage(messages.whatGoogleAnalyticsHeadline)}</h3>
            <p><FormattedHTMLMessage {...messages.whatGoogleAnalyticsText} /></p>

            <h3>{intl.formatMessage(messages.whatFacebookHeadline)}</h3>
            <p><FormattedHTMLMessage {...messages.whatFacebookText} /></p>
          </div>
        </div>
      </div>
    );
  };
}
