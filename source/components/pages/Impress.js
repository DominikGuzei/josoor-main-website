import React, { Component } from 'react';
import Head from "react-helmet";
import { Link } from "react-router";
import styles from './Impress.scss';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import { ROUTES } from '../../routes';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'impress.title',
    defaultMessage: '!!!Impress | Josoor Answers',
  },
  headline: {
    id: 'impress.headline',
    defaultMessage: '!!!Impress',
  },
  info: {
    id: 'impress.info',
    defaultMessage: '!!!Copyright © 2018 Josoor',
  },
});

export default class Impress extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <div>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
        </Head>
        <div className={styles.impress}>

          <Link to={ROUTES.INDEX} >
            <img src={josoorLogo} className={styles.josoorLogo} />
          </Link>

          <div className={styles.text}>

            <h1>{intl.formatMessage(messages.headline)}</h1>
            <FormattedHTMLMessage {...messages.info} />

          </div>
        </div>
      </div>
    );
  };
}
