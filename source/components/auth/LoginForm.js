import React, { Component } from 'react';
import Button from 'react-polymorph/lib/components/Button';
import ButtonSkin from 'react-polymorph/lib/skins/simple/raw/ButtonSkin';
import Input from 'react-polymorph/lib/components/Input';
import InputSkin from 'react-polymorph/lib/skins/simple/raw/InputSkin';
import josoorLogo from '../../theme/images/josoor-logo-vertical-colored.svg';
import styles from './AuthForms.scss';

export default class LoginForm extends Component {

  state = {
    emailValue: '',
    passwordValue: '',
  };

  submit = () => {
    this.props.onSubmit({
      email: this.state.emailValue,
      password: this.state.passwordValue,
    });
  };

  render() {
    const { errors, onSignupButtonClick } = this.props;
    return (
      <div className={styles.root}>
        <img src={josoorLogo} className={styles.josoorLogo} />
        <h1>Login to your Josoor Account</h1>
        <Input
          className={styles.input}
          placeholder="Email"
          value={this.state.emailValue}
          onChange={v => this.setState({ emailValue: v })}
          skin={<InputSkin />}
        />
        <Input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={this.state.passwordValue}
          onChange={v => this.setState({ passwordValue: v })}
          skin={<InputSkin />}
        />
        {errors ? (
          errors.map((error) => (
            <div key={error} className={styles.error}>{error}</div>
          ))
        ) : null}
        <Button
          className={styles.loginButton}
          onClick={this.submit}
          label='Log in'
          skin={<ButtonSkin />}
        />
        <div className={styles.actionSeparator}>
          <span>OR</span>
        </div>
        <Button
          className={styles.createAccountButton}
          label="Create an Account"
          skin={<ButtonSkin />}
          onClick={onSignupButtonClick}
        />
      </div>
    );
  }
}
