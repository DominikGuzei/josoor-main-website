import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { FormattedHTMLMessage } from 'react-intl'
import { browserHistory } from "react-router";
import LoginMutation from '../../api/mutations/LoginMutation';
import { login } from "../../api/actions/auth";
import LoginForm from './LoginForm';
import getApiErrors from "../../i18n/getApiErrors";
import styles from './LoginContainer.scss';

class LoginContainer extends Component {

  state = {
    loginErrors: null,
    isSubmitting: false,
  };

  handleLogin = ({ email, password }) => {
    if (this.state.isSubmitting) return;
    const { client, serverLogin } = this.props;
    serverLogin({ variables: { email, password }})
      .then(result => {
        this.setState({ isSubmitting: false });
        login(client, result.data.login.token);
      })
      .catch(errors => {
        this.setState({
          isSubmitting: false,
          loginErrors: getApiErrors(errors.graphQLErrors).map(error => (
            <FormattedHTMLMessage {...error} />
          ))
        })
      });
    this.setState({ loginErrors: null, isSubmitting: true });
  };

  handleSignupButtonClick = () => {
    browserHistory.push({ pathname: '/signup' });
  };

  render() {
    return (
      <div className={styles.root}>
        <LoginForm
          onSubmit={this.handleLogin}
          errors={this.state.loginErrors}
          isSubmitting={this.state.isSubmitting}
          onSignupButtonClick={this.handleSignupButtonClick}
        />
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(LoginMutation, { name: 'serverLogin' }),
)(LoginContainer));
