import React from 'react';
import { string } from 'prop-types';

// import { Query } from 'react-apollo';
import { SecureQuery } from 'crypto-collaboration-barrier';

import { getBookReviewGQL } from '../../../graphql/operations';
import { BookReviewDiv } from '../BookStyles';

export default function BookReview({ id }) {
  return (
    <SecureQuery query={getBookReviewGQL} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        if (data && data.book) {
          const { review } = data.book;
          return <BookReviewDiv>{review}</BookReviewDiv>;
        }
        return null;
      }}
    </SecureQuery>
  );
}

BookReview.propTypes = {
  id: string.isRequired,
};
