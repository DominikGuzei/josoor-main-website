import React, { Component, Fragment } from 'react';
import { defineMessages, intlShape } from 'react-intl';
import { ROUTES } from '../../../routes';
import styles from './TopMenu.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import LocaleAwareLink from '../../shared/LocaleAwareLink';

const messages = defineMessages({
  homeLink: {
    id: 'layout.topMenu.homeLink',
    defaultMessage: '!!!Home',
  },
  blogLink: {
    id: 'layout.topMenu.blogLink',
    defaultMessage: '!!!Blog',
  },
  answersLink: {
    id: 'layout.topMenu.answersLink',
    defaultMessage: 'Answers',
  },
  connectLink: {
    id: 'layout.topMenu.connectLink',
    defaultMessage: 'Connect',
  },
  aboutLink: {
    id: 'layout.topMenu.aboutLink',
    defaultMessage: 'About',
  },
});

export default class TopMenu extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <div className={styles.topMenu}>
        <div className={styles.itemsLeft}>
          <LocaleAwareLink to={ROUTES.INDEX} className={styles.homeLink}>
            {intl.formatMessage(messages.homeLink)}
          </LocaleAwareLink>
        </div>
        <div className={styles.itemsRight}>
          <DesktopMenu
            className={styles.desktopMenu}
            linkTitles={messages}
          />
          <MobileMenu
            className={styles.mobileMenu}
            linkTitles={messages}
          />
        </div>
      </div>
    );
  }
}
