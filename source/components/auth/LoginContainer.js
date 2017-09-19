import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import LoginMutation from '../../api/mutations/LoginMutation';
import CurrentUserQuery from '../../api/queries/CurrentUserQuery';
import { login as loginAction, logout } from "../../api/actions/auth";

export default withApollo(compose(
  graphql(CurrentUserQuery),
  graphql(LoginMutation, { name: 'login' }),
)
(({ login, data: { loading, error, currentUser, refetch } }) => {
  return (
    <div>
      { currentUser ? (
        <div>Current User: {currentUser.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
      <button onClick={() => {
        login({
          variables: { email: "dominik.guzei@gmail.com", password: "timeline" }
        })
          .then((result) => loginAction(result.data.login.token));
      }}>
        Login
      </button>
      <button onClick={() => logout(this.props.client)}>
        Logout
      </button>
    </div>
  );
}));
