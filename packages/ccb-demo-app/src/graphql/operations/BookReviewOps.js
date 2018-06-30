import gql from 'graphql-tag';

export const getBookReviewGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      id
      review
      __typename
    }
  }
`;

export const setBookReviewGQL = gql`
  mutation setBookReview($id: String!, $review: String) {
    setBookReview(id: $id, review: $review) {
      id
      review
      __typename
    }
  }
`;

// -------The only difference is the @secured annoation

export const getBookReviewSecureGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      id
      review @secured
      __typename
    }
  }
`;

export const setBookReviewSecureGQL = gql`
  mutation setBookReview($id: String!, $review: String) {
    setBookReview(id: $id, review: $review) {
      id
      review @secured
      __typename
    }
  }
`;
