import React, { Component } from 'react';
import { defineMessages, intlShape } from 'react-intl';
import Button from 'react-polymorph/lib/components/Button';
import ButtonSkin from 'react-polymorph/lib/skins/simple/raw/ButtonSkin';
import Input from 'react-polymorph/lib/components/Input';
import InputSkin from 'react-polymorph/lib/skins/simple/raw/InputSkin';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import LoadingSpinner from '../shared/LoadingSpinner';
import SubmitButton from '../shared/SubmitButton';
import { formMessages } from '../../i18n/global-messages';
import styles from './AuthForms.scss';

const messages = defineMessages({
  headline: {
    id: 'login.form.headline',
    defaultMessage: '!!!Login to your Josoor Account',
    description: 'Login form headline'
  },
  emailPlaceholder: {
    id: 'login.form.email.placeholder',
    defaultMessage: '!!!The email address you used to sign up …',
    description: 'Placeholder of the "email" input field in the login form'
  },
  passwordPlaceholder: {
    id: 'login.form.password.placeholder',
    defaultMessage: '!!!*****',
    description: 'Placeholder of the "password" input field in the login form'
  },
  loginButtonLabel: {
    id: 'login.form.submit.button.label',
    defaultMessage: '!!!Log in',
    description: 'Label of the submit button in the login form'
  },
  signupButtonLabel: {
    id: 'login.form.signup.button.label',
    defaultMessage: '!!!Create an Account',
    description: 'Label of the "go to signup" button in the login form'
  },
});

export default class LoginForm extends Component {

  state = {
    emailValue: '',
    passwordValue: '',
  };

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  submit = () => {
    this.props.onSubmit({
      email: this.state.emailValue,
      password: this.state.passwordValue,
    });
  };

  render() {
    const { isSubmitting, errors, onSignupButtonClick } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.root}>
        <img src={josoorLogo} className={styles.josoorLogo} />
        <h1>{intl.formatMessage(messages.headline)}</h1>
        <Input
          className={styles.input}
          label={intl.formatMessage(formMessages.emailLabel)}
          placeholder={intl.formatMessage(messages.emailPlaceholder)}
          value={this.state.emailValue}
          onChange={v => this.setState({ emailValue: v })}
          error={errors ? ' ' : null}
          skin={<InputSkin />}
        />
        <Input
          className={styles.input}
          type="password"
          label={intl.formatMessage(formMessages.passwordLabel)}
          placeholder={intl.formatMessage(messages.passwordPlaceholder)}
          value={this.state.passwordValue}
          onChange={v => this.setState({ passwordValue: v })}
          error={errors ? ' ' : null}
          skin={<InputSkin />}
        />
        {errors ? (
          errors.map((error) => (
            <div key={error} className={styles.error}>{error}</div>
          ))
        ) : null}
        <SubmitButton
          className={styles.loginButton}
          onClick={this.submit}
          label={intl.formatMessage(messages.loginButtonLabel)}
          spinner={<LoadingSpinner />}
          isSubmitting={isSubmitting}
          skin={<ButtonSkin />}
        />
        <div className={styles.actionSeparator}>
          <span>{intl.formatMessage(formMessages.orLabel)}</span>
        </div>
        <Button
          className={styles.createAccountButton}
          label={intl.formatMessage(messages.signupButtonLabel)}
          skin={<ButtonSkin />}
          onClick={onSignupButtonClick}
        />
      </div>
    );
  }
}
