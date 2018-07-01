import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
// import { WebSocketLink } from 'apollo-link-ws';

import { resolvers, defaults } from '../localState';
import { GRAPHQL_ENDPOINT } from '../../config';

export default function createClient() {
  const cache = new InMemoryCache({});

  const stateLink = withClientState({ cache, defaults, resolvers });

  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  const onErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    cache,
    link: ApolloLink.from([onErrorLink, stateLink, httpLink]),
  });
}
