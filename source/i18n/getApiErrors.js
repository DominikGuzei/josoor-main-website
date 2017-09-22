import apiErrors from './messages/api-errors';

export default (errorCodes) => errorCodes.map(e => apiErrors[e.code]);
