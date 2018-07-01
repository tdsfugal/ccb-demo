import {
  AUTHENTICATED_AT_STARTUP,
  INITIAL_QUERY_TYPE,
  INITIAL_MUTATION_TYPE,
  INITIAL_SUBSCRIPTION_TYPE,
} from '../../config';

export default {
  typeDefs: `

    type SecurityState {
      queryType: String!,
      mutationType: String!,
      subscriptionType: String!,
      isAuthenticated: Boolean!
    }

    type Query {
      getSecurityState: SecurityState
    }

    type Mutation {
      setQueryType: SecurityState
      setMutationType: SecurityState
      setSubscriptionType: SecurityState
      setAuthentication: SecurityState
    }
  `,

  defaults: {
    securityState: {
      queryType: INITIAL_QUERY_TYPE,
      mutationType: INITIAL_MUTATION_TYPE,
      subscriptionType: INITIAL_SUBSCRIPTION_TYPE,
      isAuthenticated: AUTHENTICATED_AT_STARTUP,
      __typename: 'SecurityState',
    },
  },

  resolvers: {
    Mutation: {
      setQueryType: async (_, args, { cache }) => {
        cache.writeData({
          data: {
            securityState: {
              queryType: args.queryType,
              __typename: 'SecurityState',
            },
          },
        });
        return null;
      },
      setMutationType: async (_, args, { cache }) => {
        cache.writeData({
          data: {
            securityState: {
              mutationType: args.mutationType,
              __typename: 'SecurityState',
            },
          },
        });
        return null;
      },
      setSubscriptionType: async (_, args, { cache }) => {
        cache.writeData({
          data: {
            securityState: {
              subscriptionType: args.subscriptionType,
              __typename: 'SecurityState',
            },
          },
        });
        return null;
      },
      setAuthentication: async (_, args, { cache }) => {
        cache.writeData({
          data: {
            securityState: {
              isAuthenticated: args.authenticated,
              __typename: 'SecurityState',
            },
          },
        });
        return null;
      },
    },
  },
};
