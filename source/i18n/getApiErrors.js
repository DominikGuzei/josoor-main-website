import apiErrors from './messages/api-errors';

export default (errorCodes) => errorCodes.map(e => {
  const knownError = apiErrors[e.code];
  if (!knownError) return apiErrors.UknownError;
  return knownError;
});
