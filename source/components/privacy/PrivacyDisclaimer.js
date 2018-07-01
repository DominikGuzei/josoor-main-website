import React, { Component } from 'react';
import Button from 'react-polymorph/lib/components/Button';
import ButtonSkin from 'react-polymorph/lib/skins/simple/ButtonSkin';
import { PrivacyContext } from './PrivacyContext.js';
import styles from './PrivacyDisclaimer.scss';
import LocaleAwareLink from '../shared/LocaleAwareLink';
import { ROUTES } from '../../routes';
import { defineMessages, intlShape } from 'react-intl';

const messages = defineMessages({
  disclaimer: {
    id: 'PrivacyDisclaimer.intro',
    defaultMessage: 'Please help us enhance our website by storing cookies and collecting anonymized data.',
  },
  privacyStatementLink: {
    id: 'PrivacyDisclaimer.privacyStatementLink',
    defaultMessage: 'Learn more in our Privacy Statement',
  },
  allowButtonLabel: {
    id: 'PrivacyDisclaimer.allowButtonLabel',
    defaultMessage: 'allow',
  },
  refuseButtonLabel: {
    id: 'PrivacyDisclaimer.refuseButtonLabel',
    defaultMessage: 'refuse',
  },
});

export default class PrivacyDisclaimer extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <PrivacyContext.Consumer>
        {({ hasLoadedSettings, userHasDecided, agree, refuse }) => (
          hasLoadedSettings && !userHasDecided && (
          <div className={styles.root}>
            <div className={styles.diclaimer}>
              <p>
                {intl.formatMessage(messages.disclaimer)}
                <LocaleAwareLink to={ROUTES.PRIVACY} className={styles.privacyLink}>
                  {intl.formatMessage(messages.privacyStatementLink)}
                </LocaleAwareLink>
              </p>
              <Button
                className={styles.agreeButton}
                onClick={agree}
                skin={ButtonSkin}
                label={intl.formatMessage(messages.allowButtonLabel)}
              />
              <a className={styles.refuseLink} onClick={refuse}>
                {intl.formatMessage(messages.refuseButtonLabel)}
              </a>
            </div>
          </div>
          ))}
      </PrivacyContext.Consumer>
    )
  }
}
