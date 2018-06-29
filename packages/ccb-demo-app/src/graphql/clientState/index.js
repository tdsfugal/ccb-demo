export default {
  typeDefs: `

    type SecurityState {
      queryType: String!,
      mutationType: String!,
      isAuthenticated: Boolean!
    }

    type Query {
      getSecurityState: SecurityState
    }

    type Mutation {
      setQueryType: SecurityState
      setMutationType: SecurityState
      setAuthentication: SecurityState
    }
  `,

  defaults: {
    securityState: {
      queryType: 'Query',
      mutationType: 'Mutation',
      isAuthenticated: false,
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
