import { apiErrors } from './global-messages';

export default (errorCodes) => errorCodes.map(e => {
  const knownError = apiErrors[e.code];
  if (!knownError) return apiErrors.UknownError;
  return knownError;
});
