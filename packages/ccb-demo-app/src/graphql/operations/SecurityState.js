import gql from 'graphql-tag';

export const getSecurityStateGQL = gql`
  query getSecurityState @client {
    securityState {
      queryType
      mutationType
      subscriptionType
      isAuthenticated
    }
  }
`;

export const setQueryTypeGQL = gql`
  mutation setQueryType($queryType: String!) {
    setQueryType(queryType: $queryType) @client
  }
`;

export const setMutationTypeGQL = gql`
  mutation setMutationType($mutationType: String!) {
    setMutationType(mutationType: $mutationType) @client
  }
`;

export const setSubscriptionTypeGQL = gql`
  mutation setSubscriptionType($subscriptionType: String!) {
    setSubscriptionType(subscriptionType: $subscriptionType) @client
  }
`;

export const setAuthenticationGQL = gql`
  mutation setAuthentication($authenticated: Boolean) {
    setAuthentication(authenticated: $authenticated) @client
  }
`;
