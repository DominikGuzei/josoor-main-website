import { setAuthToken } from "../storage/authToken";
import { browserHistory } from "react-router";

const resetStore = (client) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      client.resetStore().then(resolve).catch(reject);
    });
  })
);

export const login = (apolloClient, authToken) => {
  setAuthToken(authToken);
  browserHistory.push({ pathname: '/' });
  return resetStore(apolloClient);
};

export const logout = (apolloClient) => {
  setAuthToken(null);
  browserHistory.push({ pathname: '/' });
  return resetStore(apolloClient);
};
