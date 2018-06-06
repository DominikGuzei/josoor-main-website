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
    location = currentPath.replace(new RegExp(`^/${currentLocale}`), `/${value}`);
  };

  render() {
    const { intl } = this.context;
    const { selectTheme } = this.props;
    return (
      <Select
        themeOverrides={{ [IDENTIFIERS.SELECT]: selectTheme }}
        options={[
          { label: 'English', value: 'en' },
          { label: 'العربية', value: 'ar' },
          { label: 'Deutsch', value: 'de' },
        ]}
        value={intl.locale}
        onChange={this.handleLanguageSelection}
        skin={SelectSkin}
      />
    );
  }
}
