import React, { Component, Fragment } from 'react';
import { intlShape } from 'react-intl';
import classnames from 'classnames';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import JoinUsButton from '../../shared/JoinUsButton';
import { ROUTES } from '../../../routes';
import styles from './DesktopMenu.scss';
import DesktopSelectTheme from './LanguageSelect/LanguageSelectDesktop.scss';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

export default class DesktopMenu extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const { linkTitles, className } = this.props;
    return (
      <div className={classnames([styles.desktopMenu, className])}>
        <LocaleAwareLink to={ROUTES.BLOG.INDEX}>
          {intl.formatMessage(linkTitles.blogLink)}
        </LocaleAwareLink>
        <LocaleAwareLink to={ROUTES.ABOUT}>
          {intl.formatMessage(linkTitles.aboutLink)}
        </LocaleAwareLink>
        <JoinUsButton />
        <LanguageSelect selectTheme={DesktopSelectTheme} />
      </div>
    );
  }
}
