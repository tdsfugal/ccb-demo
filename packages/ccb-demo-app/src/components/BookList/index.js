import React from 'react';
import { Query } from 'react-apollo';
import styled from 'react-emotion';

import Book from '../Book';
import { getBooks } from '../../graphql';

const BookList = styled('ul')`
  list-style-type: none;
  background-color: #f8f8f8;
  padding: 40px;
  margin: 0px;
`;

export default function Books() {
  return (
    <Query query={getBooks}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <BookList>
            {data.books.map(({ id }) => (
              <li key={id}>
                <Book id={id} />
              </li>
            ))}
          </BookList>
        );
      }}
    </Query>
  );
}
