import React, { Component } from "react";
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';
import classnames from 'classnames';
import styles from './RoundCallToActionButton.scss';

const messages = defineMessages({
  label: {
    id: 'buttons.crowdfunding',
    defaultMessage: '!!!Checkout our Crowdfunding Campaign',
  },
});

export default class CrowdfundingButton extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
  };

  render() {
    const { intl } = this.context;
    const { className } = this.props;
    return (
      <a
        href="https://www.indiegogo.com/projects/josoor-answers-the-app-for-refugees-locals"
        className={classnames([styles.button, className])}
      >
        {intl.formatMessage(messages.label)}
      </a>
    );
  }
}
