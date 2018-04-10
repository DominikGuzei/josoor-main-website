import React, { Component } from "react";
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import styles from './JoinUsButton.scss';
import { JOIN_US_ANCHOR_ID } from '../pages/Home';

const messages = defineMessages({
  joinUsLabel: {
    id: 'buttons.joinUs',
    defaultMessage: '!!!Join Us',
    description: 'Label for "join us" button'
  },
});

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
    const { className } = this.props;
    return (
      <button
        className={classnames([styles.button, className])}
        onClick={this.handleClick}
      >
        {intl.formatMessage(messages.joinUsLabel)}
      </button>
    );
  }
}
