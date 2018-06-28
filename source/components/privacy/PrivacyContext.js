import React from 'react';

export const PrivacyContext = React.createContext({
  userHasDecided: false,
  userHasGivenConsent: false,
});
