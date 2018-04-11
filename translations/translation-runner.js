const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'translations/messages',
  translationsDirectory: 'source/i18n/locales',
  singleMessagesFile: true,
  languages: ['en', 'ar', 'de']
});
