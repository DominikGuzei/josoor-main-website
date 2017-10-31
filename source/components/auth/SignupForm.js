import React, { Component } from 'react';
import { defineMessages, intlShape } from 'react-intl';
import Button from 'react-polymorph/lib/components/Button';
import ButtonSkin from 'react-polymorph/lib/skins/simple/raw/ButtonSkin';
import Input from 'react-polymorph/lib/components/Input';
import InputSkin from 'react-polymorph/lib/skins/simple/raw/InputSkin';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import styles from './AuthForms.scss';

const messages = defineMessages({
  nameLabel: {
    id: 'signup.form.name.label',
    defaultMessage: '!!!Name',
    description: 'Label of the "name" input field in the signup form'
  },
  namePlaceholder: {
    id: 'signup.form.name.placeholder',
    defaultMessage: '!!!Enter your full name …',
    description: 'Placeholder of the "name" input field in the signup form'
  },
  emailLabel: {
    id: 'signup.form.email.label',
    defaultMessage: '!!!Email',
    description: 'Label of the "email" input field in the signup form'
  },
  emailPlaceholder: {
    id: 'signup.form.email.placeholder',
    defaultMessage: '!!!E.g: example@test.com …',
    description: 'Placeholder of the "email" input field in the signup form'
  },
  passwordLabel: {
    id: 'signup.form.password.label',
    defaultMessage: '!!!Password',
    description: 'Label of the "password" input field in the signup form'
  },
  passwordPlaceholder: {
    id: 'signup.form.password.placeholder',
    defaultMessage: '!!!Enter a password with a minimum of 5 characters …',
    description: 'Placeholder of the "password" input field in the signup form'
  },
  signupButtonLabel: {
    id: 'signup.form.submit.button.label',
    defaultMessage: '!!!Sign up',
    description: 'Label of the submit button in the signup form'
  },
  orText: {
    id: 'signup.form.or.text',
    defaultMessage: '!!!or',
    description: 'Text of the separator between signup and login button'
  },
  loginButtonLabel: {
    id: 'signup.form.login.button.label',
    defaultMessage: '!!!Login with your Account',
    description: 'Label of the "go to login" button in the signup form'
  },
});

export default class SignupForm extends Component {

  state = {
    nameValue: '',
    emailValue: '',
    passwordValue: '',
  };

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  submit = () => {
    this.props.onSubmit({
      name: this.state.nameValue,
      email: this.state.emailValue,
      password: this.state.passwordValue,
    });
  };

  render() {
    const { errors, onLoginButtonClick } = this.props;
    const { intl } = this.context;
    return (
      <div className={styles.root}>
        <img src={josoorLogo} className={styles.josoorLogo} />
        <h1>Create a new Josoor Account</h1>
        <Input
          className={styles.input}
          label={intl.formatMessage(messages.nameLabel)}
          placeholder={intl.formatMessage(messages.namePlaceholder)}
          value={this.state.nameValue}
          onChange={v => this.setState({ nameValue: v })}
          error={errors.name}
          skin={<InputSkin />}
        />
        <Input
          className={styles.input}
          label={intl.formatMessage(messages.emailLabel)}
          placeholder={intl.formatMessage(messages.emailPlaceholder)}
          value={this.state.emailValue}
          onChange={v => this.setState({ emailValue: v })}
          error={errors.email}
          skin={<InputSkin />}
        />
        <Input
          className={styles.input}
          type="password"
          label={intl.formatMessage(messages.passwordLabel)}
          placeholder={intl.formatMessage(messages.passwordPlaceholder)}
          value={this.state.passwordValue}
          onChange={v => this.setState({ passwordValue: v })}
          error={errors.password}
          skin={<InputSkin />}
        />
        {errors.general.length > 0 ? (
          errors.general.map((error) => (
            <div key={error} className={styles.error}>{error}</div>
          ))
        ) : null}
        <Button
          className={styles.loginButton}
          onClick={this.submit}
          label={intl.formatMessage(messages.signupButtonLabel)}
          skin={<ButtonSkin />}
        />
        <div className={styles.actionSeparator}>
          <span>{intl.formatMessage(messages.orText)}</span>
        </div>
        <Button
          className={styles.createAccountButton}
          label={intl.formatMessage(messages.loginButtonLabel)}
          skin={<ButtonSkin />}
          onClick={onLoginButtonClick}
        />
      </div>
    );
  }
}
