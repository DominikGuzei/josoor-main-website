import React from 'react';

export const PrivacyContext = React.createContext({
  hasLoadedSettings: false,
  userHasDecided: false,
  userHasGivenConsent: false,
});
