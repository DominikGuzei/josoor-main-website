import React, { Component } from "react";
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import styles from './JoinUsButton.scss';
import { JOIN_US_ANCHOR_ID } from '../pages/Home';

export default class JoinUsButton extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
  };

  handleClick = () => {
    browserHistory.push({ hash: `#${JOIN_US_ANCHOR_ID}` });
  };

  render() {
    const { intl } = this.context;
    return (
      <button
        className={styles.button}
        onClick={this.handleClick}
      >
        Join us
      </button>
    );
  }
}
