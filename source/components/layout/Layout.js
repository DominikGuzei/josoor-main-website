import React, { Component } from 'react';
import Head from "react-helmet";
import { Link } from 'react-router';
import { defineMessages, intlShape } from 'react-intl';
import styles from './Layout.scss';
import ProfileMenuItem from './menu/ProfileMenuItem';
import { ROUTES } from '../../routes';
import LanguageSelect from './menu/LanguageSelect';

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
  impressLink: {
    id: 'layout.footer.impressLink',
    defaultMessage: '!!!Impress',
    description: 'Label for "impress" link in the footer'
  },
});

export default class Layout extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { children } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.layout}>
        <Head>
          <html lang={intl.locale} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.topMenu}>
          <div className={styles.itemsLeft}>
            <Link to={ROUTES.INDEX} className={styles.homeLink}>
              {intl.formatMessage(messages.homeLink)}
            </Link>
          </div>
          <div className={styles.itemsRight}>
            <Link to={ROUTES.BLOG.INDEX} className={styles.blogLink}>
              {intl.formatMessage(messages.blogLink)}
            </Link>
            <ProfileMenuItem />
            <LanguageSelect />
          </div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        <footer className={styles.footer}>
          <Link to={ROUTES.IMPRESS} className={styles.impressLink}>
            {intl.formatMessage(messages.impressLink)}
          </Link>
        </footer>
      </div>
    );
  }
}
