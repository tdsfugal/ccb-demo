/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './app';
import getApolloClient from './graphql';

// set up the boilerplate
import './index.css'; // loads the base css
import './services'; // starts the autonomous services

// start the user interface
ReactDOM.render(
  <ApolloProvider client={getApolloClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
