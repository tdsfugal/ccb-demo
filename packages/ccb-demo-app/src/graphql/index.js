import gql from 'graphql-tag';

export const getBooks = gql`
  query getBooks {
    books {
      id
    }
  }
`;

export const getBook = gql`
  query getBook($id: String!) {
    book(id: $id) {
      title
      author
      review @secured
    }
  }
`;
