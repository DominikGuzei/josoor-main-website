import React, { Component } from 'react';
import Head from "react-helmet";
import { Link } from 'react-router';
import { defineMessages, intlShape } from 'react-intl';
import styles from './Layout.scss';
import { ROUTES } from '../../routes';
import TopMenu from './menu/TopMenu';

const messages = defineMessages({
  impressLink: {
    id: 'layout.footer.impressLink',
    defaultMessage: '!!!Impress',
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
        <TopMenu />
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
