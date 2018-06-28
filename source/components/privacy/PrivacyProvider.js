import React, { Component } from 'react';
import { PrivacyContext } from './PrivacyContext.js';

const PRIVACY_CONSENT = 'privacy-consent';

const privacyConsent = {
  set(value) {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(PRIVACY_CONSENT, value);
  },
  get() {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem(PRIVACY_CONSENT);
  },
  YES: 'true',
  NO: 'no',
};

export default class PrivacyProvider extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      userHasDecided: privacyConsent.get() !== null,
      userHasGivenConsent: privacyConsent.get() === privacyConsent.YES,
      agree: () => {
        privacyConsent.set(privacyConsent.YES);
        this.setState({ userHasDecided: true, userHasGivenConsent: true });
      },
      deny: () => {
        privacyConsent.set(privacyConsent.NO);
        this.setState({ userHasDecided: true, userHasGivenConsent: false });
      },
      toggle: () => {
        const { userHasDecided, userHasGivenConsent } = this.state;
        const currentChoice = !!(userHasDecided && userHasGivenConsent);
        privacyConsent.set(!currentChoice);
        this.setState({ userHasDecided: true, userHasGivenConsent: !currentChoice });
        // Reload page if user withdraws consent
        if (currentChoice === true) {
          setTimeout(() => location.reload(), 500);
        }
      }
    });
  }

  render() {
    return (
      <PrivacyContext.Provider value={this.state}>
        {this.props.children}
      </PrivacyContext.Provider>
    )
  }
}
