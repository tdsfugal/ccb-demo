export default {
  typeDefs: `
  
    type SecurityState { isSecured: Boolean }

    type Query { getSecured: SecurityState }
    type Mutation { setSecured: SecurityState }
  `,

  defaults: {
    securityState: {
      isSecured: true,
      __typename: 'SecurityState',
    },
  },

  resolvers: {
    Mutation: {
      setSecured: async (_, args, { cache }) => {
        cache.writeData({
          data: {
            securityState: {
              isSecured: args.secured,
              __typename: 'SecurityState',
            },
          },
        });
        return null;
      },
    },
  },
};
