import gql from 'graphql-tag';

export const getBooksGQL = gql`
  query getBooks {
    books {
      id
    }
  }
`;

export const getBookGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      title
      author
    }
  }
`;

export const addBookGQL = gql`
  mutation addBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
      __typename
    }
  }
`;

export const deleteBookGQL = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id) {
      id
      title
      author
      __typename
    }
  }
`;

export const getBookReviewGQL = gql`
  query getBook($id: String!) {
    book(id: $id) {
      review @secured
    }
  }
`;

export const updateReviewGQL = gql`
  mutation updateReview($id: String!, $review: String) {
    updateReview(id: $id, review: $review) {
      id
      review
      __typename
    }
  }
`;

export const getSecurityStateGQL = gql`
  query getSecurityState @client {
    securityState {
      isSecured
    }
  }
`;

export const setSecuredGQL = gql`
  mutation setSecured($secured: Boolean) {
    setSecured(secured: $secured) @client
  }
`;
