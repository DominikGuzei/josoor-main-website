import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import { defineMessages, intlShape } from 'react-intl';
import { ROUTES } from '../../../routes';
import styles from './TopMenu.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const messages = defineMessages({
  homeLink: {
    id: 'layout.topMenu.homeLink',
    defaultMessage: '!!!Home',
    description: 'Label for "home" link in top menu'
  },
  blogLink: {
    id: 'layout.topMenu.blogLink',
    defaultMessage: '!!!Blog',
    description: 'Label for "blog" link in top menu'
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
          <Link to={ROUTES.INDEX} className={styles.homeLink}>
            {intl.formatMessage(messages.homeLink)}
          </Link>
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
