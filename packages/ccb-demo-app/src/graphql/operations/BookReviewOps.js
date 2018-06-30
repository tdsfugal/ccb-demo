import gql from 'graphql-tag';

export const getBookReviewGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      review
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

export const getBookReviewSecureGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      review @secured
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
