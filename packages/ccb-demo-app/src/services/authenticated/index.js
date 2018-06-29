import getCrypto from '../crypto';
import { getApolloClient, getSecurityStateGQL } from '../../graphql';

const client = getApolloClient();

const observable = client.watchQuery({
  query: getSecurityStateGQL,
  fetchPolicy: 'cache-only',
});

/* eslint-disable no-console */
export default observable.subscribe({
  next: ({
    data: {
      securityState: { isAuthenticated = false },
    },
  }) => {
    if (isAuthenticated) {
      getCrypto().setCryptoOn();
    } else {
      getCrypto().setCryptoOff();
    }
  },
  error: err => {
    console.log(err);
  },
  complete: () => console.log('Security observing subscription is done'),
});
