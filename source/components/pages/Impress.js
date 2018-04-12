import React, { Component } from 'react';
import Head from "react-helmet";
import styles from './Impress.scss';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import { ROUTES } from '../../routes';
import { defineMessages, intlShape, FormattedHTMLMessage } from 'react-intl';
import LocaleAwareLink from '../shared/LocaleAwareLink';

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

          <LocaleAwareLink to={ROUTES.INDEX} >
            <img src={josoorLogo} className={styles.josoorLogo} />
          </LocaleAwareLink>

          <div className={styles.text}>

            <h1>{intl.formatMessage(messages.headline)}</h1>
            <FormattedHTMLMessage {...messages.info} />

          </div>
        </div>
      </div>
    );
  };
}
