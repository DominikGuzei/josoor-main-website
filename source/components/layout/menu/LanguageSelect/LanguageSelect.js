import React, { Component } from "react";
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Select from 'react-polymorph/lib/components/Select';
import SelectSkin from 'react-polymorph/lib/skins/simple/SelectSkin';
import { withTheme } from 'react-polymorph/lib/themes/withTheme';
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: '!!!English',
  },
});

class LanguageSelect extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
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
    const { context, selectTheme } = this.props;
    // Use inherited theme for all but the select component
    const theme = Object.assign({}, context.theme, {
      [IDENTIFIERS.SELECT]: selectTheme
    });
    return (
      <Select
        theme={theme}
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

export default withTheme(LanguageSelect);
