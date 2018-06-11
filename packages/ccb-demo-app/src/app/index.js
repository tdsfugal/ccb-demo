import React from 'react';
import styled from 'react-emotion';

import Header from '../components/Header';
import BookList from '../components/BookList';

const App = styled('div')`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

const Demo = styled('div')`
  height: fill-available;
  width: fill-available;
  margin: 80px 0px 0px 0px;
  padding: 0px;
  background-color: #fff;
  overflow-y: scroll;
`;

export default () => (
  <App>
    <Header title="CCB Demo" />
    <Demo>
      <BookList />
    </Demo>
  </App>
);
