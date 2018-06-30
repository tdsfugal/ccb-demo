// The GraphQL schema in string form
export default `

  type Query {
    books: [Book]
    book(id: String): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id: String!): Book
    setBookReview(id: String!, review: String): Book 
  }

  type Book {
    id: String!,
    title: String,
    author: String
    review: String
  }

`;
