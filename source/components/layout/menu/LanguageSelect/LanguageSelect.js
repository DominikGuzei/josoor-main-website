import React, { Component } from "react";
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Select from 'react-polymorph/lib/components/Select';
import SelectSkin from 'react-polymorph/lib/skins/simple/SelectSkin';
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: '!!!English',
  },
  english: {
    id: 'languages.english',
    defaultMessage: '!!!English',
  },
  arabic: {
    id: 'languages.arabic',
    defaultMessage: '!!!Arabic',
  },
  german: {
    id: 'languages.german',
    defaultMessage: '!!!German',
  },
});

export default class LanguageSelect extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    theme: PropTypes.object,
  };

  handleLanguageSelection = (value) => {
    const { router, intl } = this.context;
    const currentPath = router.location.pathname;
    const currentLocale = intl.locale;
    browserHistory.push({
      pathname: currentPath.replace(new RegExp(`^/${currentLocale}`), `/${value}`)
    });
  };

  render() {
    const { intl } = this.context;
    const { selectTheme } = this.props;
    return (
      <Select
        themeOverrides={{ [IDENTIFIERS.SELECT]: selectTheme }}
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
