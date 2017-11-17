import { setAuthToken } from "../storage/authToken";
import { browserHistory } from 'react-router';
import { ROUTES } from '../../routes';

const resetStore = (client) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      client.resetStore().then(resolve).catch(reject);
    });
  })
);

export const login = (apolloClient, authToken) => {
  setAuthToken(authToken);
  browserHistory.push(ROUTES.INDEX);
  return resetStore(apolloClient);
};

export const logout = (apolloClient) => {
  setAuthToken(null);
  browserHistory.push(ROUTES.INDEX);
  return resetStore(apolloClient);
};
