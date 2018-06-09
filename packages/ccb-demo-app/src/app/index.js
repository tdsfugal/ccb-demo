import React from 'react';
import styled from 'react-emotion';

import Header from '../components/Header';
import Demo from '../components/Demo';

const App = styled('div')`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <App>
    <Header title="CCB Demo" />
    <Demo />
  </App>
);
