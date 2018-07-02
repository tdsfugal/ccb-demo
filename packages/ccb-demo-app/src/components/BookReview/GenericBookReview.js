import React from 'react';
import { string, func, object, arrayOf, shape } from 'prop-types';

import BookReviewEditor from './BookReviewEditor';

export default function GenericBookReview({
  id,
  QueryComponent,
  MutationComponent,
  getReviewGQL,
  updateReviewGQL,
  secured,
}) {
  return (
    <MutationComponent mutation={updateReviewGQL} secured={secured}>
      {updateReview => (
        <QueryComponent query={getReviewGQL} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            const { text } = data.bookReview;
            return (
              <BookReviewEditor
                value={text}
                update={newValue =>
                  updateReview({ variables: { id, text: newValue } })
                }
              />
            );
          }}
        </QueryComponent>
      )}
    </MutationComponent>
  );
}

/* eslint-disable react/forbid-prop-types */

GenericBookReview.propTypes = {
  id: string.isRequired,
  QueryComponent: func.isRequired,
  MutationComponent: func.isRequired,
  getReviewGQL: object.isRequired,
  updateReviewGQL: object.isRequired,
  secured: arrayOf(
    shape({
      name: string.isRequired,
      options: object,
    }),
  ).isRequired,
};
