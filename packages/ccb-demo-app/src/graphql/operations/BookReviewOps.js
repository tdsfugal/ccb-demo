import gql from 'graphql-tag';

export const getBookReviewGQL = gql`
  query getBookReview($id: String!) {
    bookReview(id: $id) {
      id
      reviewer
      text
      __typename
    }
  }
`;

export const updateBookReviewGQL = gql`
  mutation updateBookReview($id: String!, $text: String) {
    updateBookReview(id: $id, text: $text) {
      id
      reviewer
      text
      __typename
    }
  }
`;

// -------The only difference is the @secured annoation

export const getBookReviewSecureGQL = gql`
  query getBookReview($id: String!) {
    bookReview(id: $id) {
      id
      reviewer
      text @secured
      __typename
    }
  }
`;

export const updateBookReviewSecureGQL = gql`
  mutation updateBookReview($id: String!, $text: String) {
    updateBookReview(id: $id, text: $text) {
      id
      reviewer
      text @secured
      __typename
    }
  }
`;
