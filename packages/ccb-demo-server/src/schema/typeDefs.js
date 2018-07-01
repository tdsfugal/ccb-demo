// The GraphQL schema in string form
export default `

  type Query {
    books: [Book]
    book(id: String!): Book

    bookReview(id: String!): BookReview
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id: String!): Book

    createBookReview(bookId: String!, reviewer: String!, text: String!): BookReview
    updateBookReview(id: String!, text: String): BookReview
    deleteBookReview(id: String! ): BookReview
  }

  type Book {
    id: String!,
    title: String!,
    author: String!
    reviews: [BookReview]!
  }

  type BookReview {
    id: String!,
    reviewer: String!
    text: String!
  }

`;
