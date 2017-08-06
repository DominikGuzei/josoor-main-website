import React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import TranslationsList from '../components/TranslationsList';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
});

export default () => (
  <ApolloProvider client={client}>
    <TranslationsList />
  </ApolloProvider>
);
