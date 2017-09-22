import React, { Component } from "react";
import { graphql, compose, withApollo } from 'react-apollo';
import { Link } from "react-router";
import CurrentUserQuery from '../../../api/queries/CurrentUserQuery';
import { logout } from "../../../api/actions/auth";
import styles from './ProfileMenuItem.scss';

class ProfileMenuItem extends Component {

  handleLogout = () => {
    const { client } = this.props;
    logout(client).catch(error => console.log(error));
  };

  render() {
    const { data: { error, currentUser } } = this.props;
    console.log(currentUser);
    return (
      <div className={styles.root}>
        { currentUser ? (
          <div className={styles.profile}>
            <div>{currentUser.name}</div>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className={styles.loginLink}>Login</Link>
        )}
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(CurrentUserQuery)
)(ProfileMenuItem));
