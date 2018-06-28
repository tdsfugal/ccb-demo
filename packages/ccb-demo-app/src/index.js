/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { encrypt, decrypt, setupCrypto } from 'ccb-demo-crypto';
import { setupCCB } from 'crypto-collaboration-barrier';

import clientState from './graphql/clientState';

import App from './app';

import './index.css';

setupCrypto({ passkey: 'abc123' });
setupCCB({ encrypt, decrypt });

const client = new ApolloClient({
  uri: 'http://localhost:4002/graphql',
  clientState,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
