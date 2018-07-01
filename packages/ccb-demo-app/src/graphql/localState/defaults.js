import {
  AUTHENTICATED_AT_STARTUP,
  INITIAL_LINK_STATE,
  INITIAL_QUERY_TYPE,
  INITIAL_MUTATION_TYPE,
  INITIAL_SUBSCRIPTION_TYPE,
} from '../../config';

export default {
  linkState: INITIAL_LINK_STATE,
  securityState: {
    queryType: INITIAL_QUERY_TYPE,
    mutationType: INITIAL_MUTATION_TYPE,
    subscriptionType: INITIAL_SUBSCRIPTION_TYPE,
    isAuthenticated: AUTHENTICATED_AT_STARTUP,
    __typename: 'SecurityState',
  },
};
