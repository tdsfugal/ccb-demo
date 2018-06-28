import React from 'react';
import styled from 'react-emotion';
import Popup from 'reactjs-popup';
import { Mutation } from 'react-apollo';

import { addBookGQL } from '../../graphql';
import AddBookPopup from './AddBookPopup';

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
        <Popup trigger={<AddBookButton>Add Book</AddBookButton>} position="bottom right">
          {close => (
            <AddBookPopup
              handleSubmit={({ title, author }) => {
                console.log(`Adding book title = ${title} from author = ${author}`);
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
