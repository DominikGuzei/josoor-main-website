import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { getAuthToken } from './storage/authToken';

let api;

switch (process.env.CONTEXT) {
  case 'development': api = 'http://localhost:4000'; break;
  case 'production': api = 'https://josoor-staging.gigalixirapp.com'; break;
  default: api = 'https://josoor-staging.gigalixirapp.com';
}

export const setupApolloClient = () => {
  const networkInterface = createNetworkInterface({ uri: api });
  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }
      // Get the authentication token from local storage
      const token = getAuthToken();
      // Set the authorization header if there is a token
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }]);

  return new ApolloClient({ networkInterface });
};
