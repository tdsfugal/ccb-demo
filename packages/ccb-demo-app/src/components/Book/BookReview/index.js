import React from 'react';
import { string } from 'prop-types';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';
import { SecureQuery } from 'crypto-collaboration-barrier';

import { getSecurityStateGQL } from '../../../graphql/operations';
import { BookReviewDiv } from '../BookStyles';

/* eslint-disable spaced-comment, react/prop-types */

export default function BookReview({ id }) {
  return (
    <Query query={getSecurityStateGQL}>
      {outerProps => {
        if (outerProps.loading) return <p>Loading...</p>;
        if (outerProps.error) return <p>Error</p>;
        const { queryType } = outerProps.data.securityState;

        //------------- Key part of the demo -------------------
        //
        // 1) Same child function for both Secured and regular Query because
        // the data is decryrpted before it gets called:
        const childComponent = ({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return !data.book ? null : (
            <BookReviewDiv>{data.book.review}</BookReviewDiv>
          );
        };

        // 2) Only difference in the GraphQL queries is an @secured annotation:
        const getBookReviewGQL = gql`
          query getBook($id: String!) {
            book(id: $id) {
              review
            }
          }
        `;

        const getBookReviewAnnotatedGQL = gql`
          query getBook($id: String!) {
            book(id: $id) {
              review @secured
            }
          }
        `;

        // 3) Integration is a simple matter of adding a dependency and changing the HOC:
        switch (queryType) {
          case 'Query':
            return (
              <Query query={getBookReviewGQL} variables={{ id }}>
                {childComponent}
              </Query>
            );
          case 'SecureQuery':
            return (
              <SecureQuery query={getBookReviewAnnotatedGQL} variables={{ id }}>
                {childComponent}
              </SecureQuery>
            );
          default:
            // eslint-disable-next-line no-console
            console.log('Unknown Query Type');
            return null;
        }

        //-------------------------------------------------------------
      }}
    </Query>
  );
}

BookReview.propTypes = {
  id: string.isRequired,
};
