// The GraphQL schema in string form
export default `

  type Query {
    books: [Book]
    book(id: String): Book
  }

  type Book {
    id: String,
    title: String,
    author: String
    review: String
  }

`;
