import React from 'react';
import { Query } from 'react-apollo';
import styled from 'react-emotion';
import gql from 'graphql-tag';

import Book from '../Book';

const getBooks = gql`
  query getBooks {
    books {
      id
    }
  }
`;

const BookScroll = styled('ul')`
  list-style-type: none;
  background-color: #f8f8f8;
  padding: 40px;
  margin: 0px;
  overflow: scroll;
`;

export default function BookList() {
  return (
    <Query query={getBooks}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <BookScroll>
            {data.books.map(({ id }) => (
              <li key={id}>
                <Book id={id} />
              </li>
            ))}
          </BookScroll>
        );
      }}
    </Query>
  );
}
