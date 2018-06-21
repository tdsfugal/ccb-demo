import React from 'react';
import { string } from 'prop-types';
import styled from 'react-emotion';

import { Query } from 'react-apollo';

import { getBookGQL } from '../../graphql';

const BookChip = styled('div')`
  background-color: #fff;
  padding: 10px;
  margin: 0px 20px 20px 10px;
`;

const BookTitle = styled('div')`
  font-size: 0.9em;
  font-weight: bold;
`;

const BookAuthor = styled('div')`
  font-size: 0.6em;
  margin: 5px 0px 10px 30px;
`;

const BookReview = styled('div')`
  font-size: 0.7em;
  padding: 15px;
  background-color: #fdfdfe;
`;

export default function Book({ id }) {
  return (
    <Query query={getBookGQL} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        if (data && data.book) {
          const { title, author, review } = data.book;
          return (
            <BookChip>
              <BookTitle>{title}</BookTitle>
              <BookAuthor>{author}</BookAuthor>
              <BookReview>{review}</BookReview>
            </BookChip>
          );
        }
        return null;
      }}
    </Query>
  );
}

Book.propTypes = {
  id: string.isRequired,
};
