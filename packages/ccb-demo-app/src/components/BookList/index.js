import React from 'react';

import { Query } from 'react-apollo';

import { getBooksGQL } from '../../graphql';
import { BookList } from '../_styled';

import Book from '../Book';

export default function Books() {
  return (
    <Query query={getBooksGQL}>
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
