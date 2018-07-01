import React from 'react';
import Popup from 'reactjs-popup';
import { Mutation } from 'react-apollo';

import { addBookGQL, getBooksGQL } from '../../../../graphql';
import { HeaderButton } from '../../../_styled';

import AddBookPopup from './AddBookPopup';

export default function AddBook() {
  return (
    <Mutation
      mutation={addBookGQL}
      update={(cache, { data: { addBook: book } }) => {
        const { books } = cache.readQuery({ query: getBooksGQL });
        cache.writeQuery({
          query: getBooksGQL,
          data: { books: books.concat([book]) },
        });
      }}
    >
      {addBook => (
        <Popup
          trigger={<HeaderButton backgroundColor="#AAF">Add Book</HeaderButton>}
          position="bottom right"
        >
          {close => (
            <AddBookPopup
              handleSubmit={({ title, author }) => {
                addBook({ variables: { title, author } });
                close();
              }}
            />
          )}
        </Popup>
      )}
    </Mutation>
  );
}
