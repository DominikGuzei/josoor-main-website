import { setAuthToken } from "../storage/authToken";
import { browserHistory } from "react-router";

export const login = (authToken) => {
  setAuthToken(authToken);
  browserHistory.push({ pathname: '/feed' });
};

export const logout = (apolloClient) => {
  setAuthToken(null);
  browserHistory.push({ pathname: '/' });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      apolloClient.resetStore().then(resolve).catch(reject);
    });
  });
};
