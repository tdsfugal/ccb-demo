import ApolloClient from 'apollo-boost';

import clientState from './clientState';

let client = null;

export default function getApolloClient() {
  if (!client) {
    client = new ApolloClient({
      uri: 'http://localhost:4002/graphql',
      clientState,
    });
  }
  return client;
}
