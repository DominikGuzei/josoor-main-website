import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { FormattedHTMLMessage } from 'react-intl'
import SignupMutation from '../../api/mutations/SignupMutation';
import { login } from "../../api/actions/auth";
import SignupForm from './SignupForm';
import getApiErrors from "../../i18n/getApiErrors";
import styles from './LoginContainer.scss';
import { browserHistory } from 'react-router';
import apiErrors from '../../i18n/messages/api-errors';

const _setupEmptyErrorState = () => ({
  name: null,
  email: null,
  password: null,
  general: []
});

class SignupContainer extends Component {

  state = {
    formErrors: _setupEmptyErrorState(),
  };

  handleRegistration = ({name, email, password}) => {
    const {client, serverSignup} = this.props;
    serverSignup({variables: {name, email, password}})
      .then(result => login(client, result.data.signup.token))
      .catch(this.handleRegistrationErrors);
  };

  handleRegistrationErrors = (serverErrors) => {
    const errors = _setupEmptyErrorState();
    const i18nErrors = getApiErrors(serverErrors.graphQLErrors);
    i18nErrors.forEach(error => {
      const errorMessage = <FormattedHTMLMessage {...error} />;
      switch (error) {
        case apiErrors.AuthNameRequired: errors.name = errorMessage; break;
        case apiErrors.AuthInvalidEmail: errors.email = errorMessage; break;
        case apiErrors.AuthInvalidPassword: errors.password = errorMessage; break;
        default: errors.general.push(errorMessage);
      }
    });
    this.setState({ formErrors: errors });
  };

  handleLoginButtonClick = () => {
    browserHistory.push({pathname: '/login'});
  };

  render() {
    return (
      <div className={styles.root}>
        <SignupForm
          onSubmit={this.handleRegistration}
          errors={this.state.formErrors}
          onLoginButtonClick={this.handleLoginButtonClick}
        />
      </div>
    );
  }
}

export default withApollo(compose(
  graphql(SignupMutation, { name: 'serverSignup' }),
)(SignupContainer));
