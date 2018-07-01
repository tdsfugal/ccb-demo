const typeDefs = `

  type SecurityState {
    queryType: String!,
    mutationType: String!,
    subscriptionType: String!,
    isAuthenticated: Boolean!
  }

  type Query {
    getSecurityState: SecurityState
    getLinkState: String
  }

  type Mutation {
    setLinkState: String
    setQueryType: SecurityState
    setMutationType: SecurityState
    setSubscriptionType: SecurityState
    setAuthentication: SecurityState
  }

`;

export default typeDefs;
