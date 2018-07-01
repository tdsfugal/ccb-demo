import React from 'react';
import { string } from 'prop-types';

import { Query, Mutation } from 'react-apollo';
import { SecureQuery, SecureMutation } from 'crypto-collaboration-barrier';

import {
  getSecurityStateGQL,
  getBookReviewGQL,
  getBookReviewSecureGQL,
  setBookReviewGQL,
  setBookReviewSecureGQL,
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
        const childComponent = setBookReview => ({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          const { review } = data.book;
          return (
            <BookReviewEditor
              value={review}
              update={newValue =>
                setBookReview({ variables: { id, review: newValue } })
              }
            />
          );
        };

        // 3) Integration is a simple matter of adding a dependency and changing the HOC:
        const querySet = setBookReview => {
          switch (queryType) {
            case 'Query':
              return (
                <Query query={getBookReviewGQL} variables={{ id }}>
                  {childComponent(setBookReview)}
                </Query>
              );
            case 'Secure Query':
              return (
                <SecureQuery query={getBookReviewSecureGQL} variables={{ id }}>
                  {childComponent(setBookReview)}
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
              <Mutation mutation={setBookReviewGQL}>
                {setBookReview => querySet(setBookReview)}
              </Mutation>
            );
          case 'Secure Mutation':
            return (
              <SecureMutation
                mutation={setBookReviewSecureGQL}
                secured={secured}
              >
                {setBookReview => querySet(setBookReview)}
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
