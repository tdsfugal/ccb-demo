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

import {
  QUERY,
  SECURE_QUERY,
  MUTATION,
  SECURE_MUTATION,
  // SUBSCRIPTION,
  // SECURE_SUBSCRIPTION,
} from '../../config';

import GenericBookReview from './GenericBookReview';

/* eslint-disable spaced-comment, react/prop-types */
const SECURED_LIST = [{ name: 'text' }];

export default function BookReview({ id }) {
  return (
    <Query query={getSecurityStateGQL}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        const { queryType, mutationType } = data.securityState;

        let QueryComponent = null;
        let MutationComponent = null;
        let getReviewGQL = null;
        let updateReviewGQL = null;
        let secured = null;

        switch (queryType) {
          case QUERY:
            QueryComponent = Query;
            getReviewGQL = getBookReviewGQL;
            break;
          case SECURE_QUERY:
            QueryComponent = SecureQuery;
            getReviewGQL = getBookReviewSecureGQL;
            break;
          default:
            throw new Error('Unknown Query Type');
        }

        switch (mutationType) {
          case MUTATION:
            MutationComponent = Mutation;
            updateReviewGQL = updateBookReviewGQL;
            secured = []; // is ignored
            break;
          case SECURE_MUTATION:
            MutationComponent = SecureMutation;
            updateReviewGQL = updateBookReviewSecureGQL;
            secured = SECURED_LIST;
            break;
          default:
            throw new Error('Unknown Mutation Type');
        }

        return (
          <GenericBookReview
            id={id}
            QueryComponent={QueryComponent}
            MutationComponent={MutationComponent}
            getReviewGQL={getReviewGQL}
            updateReviewGQL={updateReviewGQL}
            secured={secured}
          />
        );
      }}
    </Query>
  );
}

BookReview.propTypes = {
  id: string.isRequired,
};
