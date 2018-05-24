const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const yaml = require('js-yaml');
const manageTranslations = require('react-intl-translations-manager').default;

const enLocalePath = path.join(__dirname, '../source/i18n/locales/en.json');
const cmsConfigPath = path.join(__dirname, '../source/cms/config.yml');

manageTranslations({
  messagesDirectory: 'translations/messages',
  translationsDirectory: 'source/i18n/locales',
  languages: ['en', 'ar', 'de'],
  whitelistsDirectory: 'translations/white-lists',
});

const enLocaleFile = jsonfile.readFileSync(enLocalePath);
const cmsConfig = yaml.safeLoad(fs.readFileSync(cmsConfigPath, 'utf8'));

cmsConfig.collections[0].fields = Object.keys(enLocaleFile).map((key) => ({
  label: key.toString(),
  name: key.toString(),
  widget: key === 'title' ? 'string' : 'text'
}));

fs.writeFileSync(cmsConfigPath, yaml.safeDump(cmsConfig));
