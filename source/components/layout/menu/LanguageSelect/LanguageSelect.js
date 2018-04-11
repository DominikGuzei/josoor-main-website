import React, { Component } from "react";
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Select from 'react-polymorph/lib/components/Select';
import SelectSkin from 'react-polymorph/lib/skins/simple/SelectSkin';
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';

const messages = defineMessages({
  english: {
    id: 'languages.english',
    defaultMessage: '!!!English',
    description: 'Select option for English language'
  },
  arabic: {
    id: 'languages.arabic',
    defaultMessage: '!!!Arabic',
    description: 'Select option for Arabic language'
  },
  german: {
    id: 'languages.german',
    defaultMessage: '!!!German',
    description: 'Select option for German language'
  },
});

export default class LanguageSelect extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    theme: PropTypes.object,
  };

  handleLanguageSelection = (value) => {
    browserHistory.push({ query: { lang: value } });
  };

  render() {
    const { intl, theme } = this.context;
    const { selectTheme } = this.props;
    return (
      <Select
        theme={{ ...theme, [IDENTIFIERS.SELECT]: selectTheme }}
        options={[
          { label: intl.formatMessage(messages.english), value: 'en' },
          { label: intl.formatMessage(messages.arabic), value: 'ar' },
          { label: intl.formatMessage(messages.german), value: 'de' },
        ]}
        value={intl.locale}
        onChange={this.handleLanguageSelection}
        skin={SelectSkin}
      />
    );
  }
}