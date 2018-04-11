import React, { Component } from 'react';
import styles from './ProjectsSection.scss';
import { defineMessages, intlShape } from 'react-intl';
import { JOIN_US_ANCHOR_ID } from '../Home';

const messages = defineMessages({
  headline: {
    id: 'home.join.title',
    defaultMessage: '!!!Join the Josoor Community',
  },
});

export default class JoinUsSection extends Component {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    return (
      <div id={JOIN_US_ANCHOR_ID} className={styles.root}>
        <h1 className={styles.headline}>
          {intl.formatMessage(messages.headline)}
        </h1>
      </div>
    );
  }
}
