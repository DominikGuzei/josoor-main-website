import React, { Component } from "react";
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import Select from 'react-polymorph/lib/components/Select';
import SelectSkin from 'react-polymorph/lib/skins/simple/raw/SelectSkin';
import styles from './LanguageSelect.scss';

const SUPPORTED_LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Arabisch', value: 'ar' },
];

export default class LanguageSelect extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
  };

  handleLanguageSelection = (value) => {
    browserHistory.push({ query: { lang: value } });
  };

  render() {
    const { intl } = this.context;
    return (
      <div className={styles.root}>
        <Select
          className={styles.select}
          options={SUPPORTED_LANGUAGES}
          value={intl.locale}
          onChange={this.handleLanguageSelection}
          skin={<SelectSkin />}
        />
      </div>
    );
  }
}