export default {
  Mutation: {
    setLinkState: async (_, args, { cache }) => {
      cache.writeData({
        data: {
          linkState: args.linkType,
        },
      });
      return null;
    },
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
};
