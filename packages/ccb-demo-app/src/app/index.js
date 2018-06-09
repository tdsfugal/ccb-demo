import React from 'react';
import styled from 'react-emotion';

import Header from '../components/Header';
import Demo from '../components/Demo';
import Books from '../components/Books';

const App = styled('div')`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export default () => (
  <App>
    <Header title="CCB Demo" />
    <Demo>
      <Books />
    </Demo>
  </App>
);
