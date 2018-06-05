import React, { Component } from "react";
import { Link } from 'react-router';
import { intlShape } from 'react-intl';
import { replaceLanguageParts } from '../../utils/routing';

export default class LocaleAwareLink extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const { to } = this.props;
    const localeHref = replaceLanguageParts(to, intl.locale + '/');
    return (
      <a {...this.props} href={localeHref} />
    );
  }
}
