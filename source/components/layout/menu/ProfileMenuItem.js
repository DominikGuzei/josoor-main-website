import React, { Component } from "react";
import { graphql, compose, withApollo } from 'react-apollo';
import { Link } from "react-router";
import CurrentUserQuery from '../../../api/queries/CurrentUserQuery';
import { logout } from "../../../api/actions/auth";
import styles from './ProfileMenuItem.scss';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../routes';
import { defineMessages, intlShape } from 'react-intl';

const messages = defineMessages({
  login: {
    id: 'ProfileMenuItem.login',
    defaultMessage: '!!!Login',
    description: 'Label for "login" link in ProfileMenuItem'
  },
  logout: {
    id: 'ProfileMenuItem.logout',
    defaultMessage: '!!!Logout',
    description: 'Label for "logout" link in ProfileMenuItem'
  },
});

class ProfileMenuItem extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
  };

  handleLogout = () => {
    logout(this.props.client, this.context.router.location);
  };

  render() {
    const { data: { currentUser } } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.root}>
        {currentUser ? (
          <div className={styles.profile}>
            <span className={styles.userName}>{currentUser.name}</span>
            <button
              className={styles.logoutButton}
              onClick={this.handleLogout}
            >
              {intl.formatMessage(messages.logout)}
            </button>
          </div>
        ) : (
          <Link to={ROUTES.LOGIN} className={styles.loginLink}>
            {intl.formatMessage(messages.login)}
          </Link>
        )}
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(CurrentUserQuery)
)(ProfileMenuItem));
