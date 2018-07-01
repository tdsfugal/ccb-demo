import React from 'react';
import { string } from 'prop-types';

import { Query } from 'react-apollo';

import { getBookGQL } from '../../graphql';
import {
  BookChip,
  BookTitle,
  BookAuthor,
  BookReviewList,
  BookReviewItem,
} from '../_styled';

import BookReview from '../BookReview';

export default function Book({ id }) {
  return (
    <Query query={getBookGQL} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        if (data && data.book) {
          const { title, author, reviews } = data.book;
          return (
            <BookChip>
              <BookTitle>{title}</BookTitle>
              <BookAuthor>{author}</BookAuthor>
              <BookReviewList>
                {reviews.map(review => (
                  <BookReviewItem key={review.id}>
                    <BookReview id={review.id} />
                  </BookReviewItem>
                ))}
              </BookReviewList>
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
