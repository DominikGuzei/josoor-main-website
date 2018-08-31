import React, { Component } from "react";
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import { Link } from 'react-router';
import { Select } from 'react-polymorph/lib/components/Select';
import { SelectSkin } from 'react-polymorph/lib/skins/simple/SelectSkin';
import { withTheme } from 'react-polymorph/lib/components/HOC/withTheme';
import { IDENTIFIERS } from 'react-polymorph/lib/themes/API';
import styles from './LanguageSelect.scss';
import { getRouteToAlternateLanguage } from '../../../../utils/routing';

class LanguageSelect extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
  };

  renderOption = ({ label, value }) => {
    const { router, intl } = this.context;
    const currentPath = router.location.pathname;
    const currentLocale = intl.locale;
    const localeHref = getRouteToAlternateLanguage(currentPath, currentLocale, value);
    return <Link className={styles.label} to={localeHref}>{label}</Link>;
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
        skin={SelectSkin}
        optionRenderer={this.renderOption}
      />
    );
  }
}

export default withTheme(LanguageSelect);
