const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'translations/messages',
  translationsDirectory: 'source/i18n/locales',
  languages: ['en', 'ar', 'de'],
  whitelistsDirectory: 'translations/white-lists',
});
