import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { FormattedHTMLMessage } from 'react-intl'
import LoginMutation from '../../api/mutations/LoginMutation';
import { login } from "../../api/actions/auth";
import LoginForm from './LoginForm';
import getApiErrors from "../../i18n/getApiErrors";
import styles from './LoginContainer.scss';

class LoginContainer extends Component {

  state = {
    loginErrors: null,
  };

  handleLogin = ({ email, password }) => {
    const { client, serverLogin } = this.props;
    serverLogin({ variables: { email, password }})
      .then(result => login(client, result.data.login.token))
      .catch(errors => {
        this.setState({
          loginErrors: getApiErrors(errors.graphQLErrors).map(error => (
            <FormattedHTMLMessage {...error} />
          ))
        })
      });
  };

  render() {
    return (
      <div className={styles.root}>
        <LoginForm
          onSubmit={this.handleLogin}
          errors={this.state.loginErrors}
        />
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(LoginMutation, { name: 'serverLogin' }),
)(LoginContainer));
