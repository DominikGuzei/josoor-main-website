import { defineMessages } from 'react-intl';

export default defineMessages({
  UknownError: {
    id: 'api.errors.UknownError',
    defaultMessage: '!!!An error occurred, please try again later.',
    description: 'Generic error message when backend threw an uknown error.'
  },
  AuthInvalid: {
    id: 'api.errors.AuthInvalid',
    defaultMessage: '!!!Invalid credentials provided.',
    description: 'Error message when invalid auth credentials have been submitted.'
  },
  AuthNameRequired: {
    id: 'api.errors.AuthNameRequired',
    defaultMessage: '!!!Invalid email address provided.',
    description: 'Error message when invalid email has been submitted.'
  },
  AuthInvalidEmail: {
    id: 'api.errors.AuthInvalidEmail',
    defaultMessage: '!!!Invalid email address provided.',
    description: 'Error message when invalid email has been submitted.'
  },
  AuthInvalidPassword: {
    id: 'api.errors.AuthInvalidPassword',
    defaultMessage: '!!!Invalid password provided.',
    description: 'Error message when invalid password has been submitted.'
  },
});
