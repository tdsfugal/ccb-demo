import React from 'react';
import { string } from 'prop-types';

import { Query, Mutation } from 'react-apollo'; 
import { SecureQuery, SecureMutation } from 'crypto-collaboration-barrier'; 

import {
  getSecurityStateGQL,
  getBookReviewGQL,
  getBookReviewSecureGQL,
  setBookReviewGQL,
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
        const childComponent = update => ({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          const { review } = data.book;
          return (
            <BookReviewEditor
              value={review}
              update={newValue => {
                console.log(newValue);
                update(newValue);
              }}
            />
          );
        };
 
        // 3) Integration is a simple matter of adding a dependency and changing the HOC:
        const querySet = update => {
          switch (queryType) {
            case 'Query':
              return (
                <Query query={getBookReviewGQL} variables={{ id }}>
                  {childComponent(update)}
                </Query>
              );
            case 'SecureQuery':
              return (
                <SecureQuery query={getBookReviewSecureGQL} variables={{ id }}>
                  {childComponent(update)}
                </SecureQuery>
              );
            default:
              // eslint-disable-next-line no-console
              console.log('Unknown Query Type');
              return null; 
          }
        };
 
        // 3) Integration is a simple matter of adding a dependency and changing the HOC:
        const querySet = () => {
          switch (queryType) {
            case 'Query':
              return (
                <Query query={getBookReviewGQL} variables={{ id }}>
                  {childComponent}
                </Query>
              );
            case 'SecureQuery':
              return (
                <SecureQuery query={getBookReviewSecureGQL} variables={{ id }}>
                  {childComponent}
                </SecureQuery>
              );
            default:
              // eslint-disable-next-line no-console
              console.log('Unknown Query Type');
              return null;
          }
        };

        // 4 Mutations follow the same pattern. Annotation in the mutation
        const setBookReviewGQL = gql`
          mutation setBookReview($id: String!, $review: String!) {
            book(id: $id) {
              review
            }
          }
        `;

        const setBookReviewSecureGQL = gql`
          mutation setBookReview($id: String!, $review: String!) {
            book(id: $id) {
              review @secured
            }
          }
        `;

        // One key difference is that the things in the argument list that must be secured
        // cannot be invered from the GraphQL annotations, as they refer only to the return values.
        // An additional "secured" values input is required.
        const secured = { review: true };

        // The outer set is the same; just swap the HOC and add a couple of things.
        switch (mutationType) {
          case 'Mutation':
            return (
              <Mutation mutation={setBookReviewGQL}>
                {mutation => querySet(mutation)}
              </Mutation>
            );
          case 'SecureMutation':
            return (
              <SecureMutation
                mutation={setBookReviewSecureGQL}
                secured={secured}
              >
                {mutation => querySet(mutation)}
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
