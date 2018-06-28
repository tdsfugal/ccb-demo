import React from 'react';
import { string } from 'prop-types';

import { Query } from 'react-apollo';

import { getBookGQL } from '../../graphql/operations';
import { BookChipDiv, BookTitleDiv, BookAuthorDiv } from './BookStyles';
import BookReview from './BookReview';

export default function Book({ id }) {
  return (
    <Query query={getBookGQL} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        if (data && data.book) {
          const { title, author } = data.book;
          return (
            <BookChipDiv>
              <BookTitleDiv>{title}</BookTitleDiv>
              <BookAuthorDiv>{author}</BookAuthorDiv>
              <BookReview id={id} />
            </BookChipDiv>
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
