import React from 'react';
import { Mutation } from 'react-apollo';

import { addBookGQL } from '../../graphql';

import HeaderButton from './HeaderButton';

export default function AddBook() {
  return (
    <Mutation mutation={addBookGQL}>
      {addBook => (
        <HeaderButton
          onClick={() =>
            addBook({
              variables: {
                title: 'Some book title',
                author: 'Fred Flintstone',
              },
            })
          }
        >
          Add Book
        </HeaderButton>
      )}
    </Mutation>
  );
}
