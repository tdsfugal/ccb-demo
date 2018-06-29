import React from 'react';
import { string } from 'prop-types';

import { Query, Mutation } from 'react-apollo';
import { SecureQuery } from 'crypto-collaboration-barrier';

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
        const { queryType } = outerProps.data.securityState;

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

        return (
          <Mutation mutation={setBookReviewGQL}>
            {setBookReview => querySet(setBookReview)}
          </Mutation>
        );

        //-------------------------------------------------------------
      }}
    </Query>
  );
}

BookReview.propTypes = {
  id: string.isRequired,
};
