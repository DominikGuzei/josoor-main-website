import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import { intlShape } from 'react-intl';
import classnames from 'classnames';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import JoinUsButton from '../../shared/JoinUsButton';
import { ROUTES } from '../../../routes';
import styles from './DesktopMenu.scss';
import DesktopSelectTheme from './LanguageSelect/LanguageSelectDesktop.scss';

export default class DesktopMenu extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const { linkTitles, className } = this.props;
    return (
      <div className={classnames([styles.desktopMenu, className])}>
        <Link to={ROUTES.BLOG.INDEX} className={styles.blogLink}>
          {intl.formatMessage(linkTitles.blogLink)}
        </Link>
        <JoinUsButton />
        <LanguageSelect selectTheme={DesktopSelectTheme} />
      </div>
    );
  }
}
