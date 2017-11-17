import React, { Component } from "react";
import { graphql, compose, withApollo } from 'react-apollo';
import { Link } from "react-router";
import CurrentUserQuery from '../../../api/queries/CurrentUserQuery';
import { logout } from "../../../api/actions/auth";
import styles from './ProfileMenuItem.scss';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../routes';

class ProfileMenuItem extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleLogout = () => {
    logout(this.props.client, this.context.router.location);
  };

  render() {
    const { data: { currentUser } } = this.props;
    return (
      <div className={styles.root}>
        { currentUser ? (
          <div className={styles.profile}>
            <span className={styles.userName}>{currentUser.name}</span>
            <button
              className={styles.logoutButton}
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={ROUTES.LOGIN} className={styles.loginLink}>Login</Link>
        )}
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(CurrentUserQuery)
)(ProfileMenuItem));
