import React from 'react';

import { App, Demo } from '../components/_styled';

import Header from '../components/Header';
import BookList from '../components/BookList';

export default () => (
  <App>
    <Header title="CCB Demo" />
    <Demo>
      <BookList />
    </Demo>
  </App>
);
