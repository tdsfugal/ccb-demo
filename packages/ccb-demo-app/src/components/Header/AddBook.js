import React from 'react';
import styled from 'react-emotion';

import { Mutation } from 'react-apollo';

import { addBookGQL } from '../../graphql';

const AddBookButton = styled('button')`
  background-color: #ddd;
  border: solid 2px #888;
  margin: 20px;
  height: 40px;
  width: 50px;
  font-size: 0.6em;
`;

export default function AddBook() {
  return (
    <Mutation mutation={addBookGQL}>
      {addBook => (
        <AddBookButton
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
        </AddBookButton>
      )}
    </Mutation>
  );
}
