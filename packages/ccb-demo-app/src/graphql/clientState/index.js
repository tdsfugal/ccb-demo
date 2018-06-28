export default {
  typeDefs: `

    type SecurityState {
      queryType: String,
      isAuthenticated: Boolean
    }

    type Query {
      getSecurityState: SecurityState
    }
    type Mutation {
      setQueryType: SecurityState
      setAuthentication: SecurityState
    }
  `,

  defaults: {
    securityState: {
      queryType: 'SecureQuery',
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
