import React, { Component } from 'react';
import Head from "react-helmet";
import styles from './Impress.scss';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import { ROUTES } from '../../routes';
import { defineMessages, intlShape, FormattedMessage } from 'react-intl';
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
  intro: {
    id: 'impress.intro',
    defaultMessage: '!!!impress intro',
  },
  address: {
    id: 'impress.address',
    defaultMessage: '!!!impress address',
  },
  contact: {
    id: 'impress.contact',
    defaultMessage: '!!!impress contact',
  },
  copyright: {
    id: 'impress.copyright',
    defaultMessage: '!!!impress copyright',
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
        <div className={styles.header} />
        <div className={styles.impress}>
          <div className={styles.text}>

            <img className={styles.josoorLogo} src={josoorLogo} />
            <h1>{intl.formatMessage(messages.headline)}</h1>

            <FormattedMessage
              {...messages.intro}
              values={{
                linkToIndex: <LocaleAwareLink to={ROUTES.INDEX}>www.josoor.net</LocaleAwareLink>
              }}
            />

            <FormattedMessage {...messages.address} values={{ lineBreak: <br/> }} />

            <FormattedMessage
              {...messages.contact}
              values={{
                lineBreak: <br/>,
                mailtoInfo: <a href="mailto:info@josoor.net">info@josoor.net</a>
              }}
            />

            <FormattedMessage {...messages.copyright} />

          </div>
        </div>
      </div>
    );
  };
}
