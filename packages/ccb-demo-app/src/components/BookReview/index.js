import React from 'react';
import { string } from 'prop-types';

import { Query, Mutation } from 'react-apollo';
import { SecureQuery, SecureMutation } from 'crypto-collaboration-barrier';

import {
  getSecurityStateGQL,
  getBookReviewGQL,
  getBookReviewSecureGQL,
  updateBookReviewGQL,
  updateBookReviewSecureGQL,
} from '../../graphql';

import BookReviewEditor from './BookReviewEditor';

/* eslint-disable spaced-comment, react/prop-types */

export default function BookReview({ id }) {
  return (
    <Query query={getSecurityStateGQL}>
      {outerProps => {
        if (outerProps.loading) return <p>Loading...</p>;
        if (outerProps.error) return <p>Error</p>;
        const { queryType, mutationType } = outerProps.data.securityState;

        //------------- Key part of the demo -------------------
        //
        // 1) Same child function for both Secured and regular Query because
        // the data is decryrpted before it gets called:
        const childComponent = updateBookReview => ({
          loading,
          error,
          data,
        }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          const { id, text } = data.bookReview;
          return (
            <BookReviewEditor
              value={text}
              update={newValue =>
                updateBookReview({ variables: { id, text: newValue } })
              }
            />
          );
        };

        // 3) Integration is a simple matter of adding a dependency and changing the HOC:
        const querySet = updateBookReview => {
          switch (queryType) {
            case 'Query':
              return (
                <Query query={getBookReviewGQL} variables={{ id }}>
                  {childComponent(updateBookReview)}
                </Query>
              );
            case 'Secure Query':
              return (
                <SecureQuery query={getBookReviewSecureGQL} variables={{ id }}>
                  {childComponent(updateBookReview)}
                </SecureQuery>
              );
            default:
              // eslint-disable-next-line no-console
              console.log('Unknown Query Type');
              return null;
          }
        };

        // One key difference is that the things in the argument list that must be secured
        // cannot be invered from the GraphQL annotations, as they refer only to the return values.
        // An additional "secured" values input is required.
        const secured = [{ name: 'review' }];

        // The outer set is the same; just swap the HOC and add a couple of things.
        switch (mutationType) {
          case 'Mutation':
            return (
              <Mutation mutation={updateBookReviewGQL}>
                {updateBookReview => querySet(updateBookReview)}
              </Mutation>
            );
          case 'Secure Mutation':
            return (
              <SecureMutation
                mutation={updateBookReviewSecureGQL}
                secured={secured}
              >
                {updateBookReview => querySet(updateBookReview)}
              </SecureMutation>
            );
          default:
            // eslint-disable-next-line no-console
            console.log('Unknown Mutation Type');
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
