import React from 'react';
import Popup from 'reactjs-popup';
import { Mutation } from 'react-apollo';

import { addBookGQL } from '../../../../graphql/operations';
import AddBookPopup from './AddBookPopup';
import HeaderButton from '../HeaderButton';

export default function AddBook() {
  return (
    <Mutation mutation={addBookGQL}>
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
