import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { getAuthToken } from './storage/authToken';

export const setupApolloClient = () => {
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4000',
  });

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
