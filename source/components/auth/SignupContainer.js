import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { browserHistory } from 'react-router';
import { FormattedHTMLMessage } from 'react-intl'
import SignupMutation from '../../api/mutations/SignupMutation';
import { login } from "../../api/actions/auth";
import SignupForm from './SignupForm';
import getApiErrors from "../../i18n/getApiErrors";
import styles from './LoginContainer.scss';
import { apiErrors } from '../../i18n/global-messages';

const _setupEmptyErrorState = () => ({
  name: null,
  email: null,
  password: null,
  general: []
});

class SignupContainer extends Component {

  state = {
    isSubmitting: false,
    formErrors: _setupEmptyErrorState(),
  };

  handleRegistration = ({name, email, password}) => {
    if (this.state.isSubmitting) return;
    const { client, serverSignup } = this.props;
    const { router } = this.context;
    serverSignup({variables: {name, email, password}})
      .then(result => {
        this.setState({ isSubmitting: false });
        login(client, result.data.signup.token);
      })
      .catch(this.handleRegistrationErrors);
    this.setState({ loginErrors: null, isSubmitting: true });
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
    this.setState({ formErrors: errors, isSubmitting: false });
  };

  handleLoginButtonClick = () => {
    browserHistory.push('/login');
  };

  render() {
    return (
      <div className={styles.root}>
        <SignupForm
          onSubmit={this.handleRegistration}
          isSubmitting={this.state.isSubmitting}
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
