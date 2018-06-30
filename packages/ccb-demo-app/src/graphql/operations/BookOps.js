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
