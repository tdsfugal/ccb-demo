import { bookConnector, reviewConnector } from '../connectors';
import { addReviewsToBook } from './util';

export default {
  Query: {
    books: () => {
      const books = bookConnector.getBooks();
      return books.map(book => addReviewsToBook(book));
    },
    book: (_, args) => {
      const book = bookConnector.getBook(args.id);
      return addReviewsToBook(book);
    },
    bookReview: (_, args) => reviewConnector.getBookReview(args.id),
  },
  //
  // Mutation: {
  //   addBook: (_, { title, author }) => {
  //     const id = uuid();
  //     db[id] = { title, author, reviews: {} };
  //     return getBook(id);
  //   },
  //   deleteBook: (_, { id }) => {
  //     const gonner = getBook(id);
  //     if (gonner) delete db[id];
  //     return gonner;
  //   },
  //
  //   createBookReview: (_, { bookId, text }) => {
  //     const reviewId = uuid();
  //     if (db[bookId])
  //       db[bookId].reviews[reviewId] = {
  //         id: reviewId,
  //         text: text,
  //       };
  //     return getBook(bookId);
  //   },
  //   updateBookReview: (_, { id, bookId, text }) => {
  //     if (db[id]) db[bookId].reviews[reviewId].text = text;
  //     return getBook(bookId);
  //   },
  //   deleteBookReview: (_, { id, bookId, text }) => {
  //     if (db[bookid]) db[bookId].reviews[reviewId].text = text;
  //     return getBook(bookId);
  //   },
  // },
};
