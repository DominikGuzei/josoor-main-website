import React, { Component } from 'react';
import Head from "react-helmet";
import { defineMessages, intlShape } from 'react-intl';
import styles from './Layout.scss';
import { ROUTES } from '../../routes';
import TopMenu from './menu/TopMenu';
import LocaleAwareLink from '../shared/LocaleAwareLink';

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
          <LocaleAwareLink to={ROUTES.IMPRESS} className={styles.impressLink}>
            {intl.formatMessage(messages.impressLink)}
          </LocaleAwareLink>
        </footer>
      </div>
    );
  }
}
