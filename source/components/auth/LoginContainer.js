import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { FormattedHTMLMessage } from 'react-intl'
import LoginMutation from '../../api/mutations/LoginMutation';
import { login, logout } from "../../api/actions/auth";
import LoginForm from './LoginForm';
import getApiErrors from "../../i18n/getApiErrors";
import Layout from '../layout/Layout';
import styles from './LoginContainer.scss';

class LoginContainer extends Component {

  state = {
    loginErrors: null,
  };

  handleLogin = ({ email, password }) => {
    const { serverLogin } = this.props;
    serverLogin({ variables: { email, password }})
      .then(result => login(result.data.login.token))
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
      <Layout>
        <div className={styles.root}>
          <LoginForm
            onSubmit={this.handleLogin}
            errors={this.state.loginErrors}
          />
        </div>
      </Layout>
    );
  }
}

export default compose(
  graphql(LoginMutation, { name: 'serverLogin' }),
)(LoginContainer);
