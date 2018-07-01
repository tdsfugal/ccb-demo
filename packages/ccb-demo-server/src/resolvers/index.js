import { bookConnector, reviewConnector } from '../connectors';

function addReviewsToBook({ book }) {
  if (book && book.reviews) {
    return {
      ...book,
      reviews: book.reviews.map(id => reviewConnector.retrieveReview({ id })),
    };
  }
  return book;
}

export default {
  Query: {
    books: () => {
      const books = bookConnector.getBooks();
      return books.map(book => addReviewsToBook({ book }));
    },
    book: (_, { id }) => {
      const book = bookConnector.retrieveBook({ id });
      return addReviewsToBook({ book });
    },
    bookReview: (_, { id }) => reviewConnector.retrieveReview({ id }),
  },

  // Mutation: {
  //   addBook: (_, { title, author }) =>
  //     bookConnector.addBook({ title, author }),
  //
  //   deleteBook: (_, { id }) => {
  //     const book = bookConnector.getBook({ id })
  //     if (book) {
  //        book.reviews.forEach(review =>
  //          reviewConnector.deleteReview({ id: review.id})
  //        )
  //        bookConnector.deleteBook({ id })
  //        return book
  //      }
  //      return null;
  //    },
  //
  //   createBookReview: (_, { bookId, reviewer, text }) => {
  //     const book = bookConnector.getBook(bookId);
  //     if (book) {
  //       const review = reviewConnector.createReview({
  //         bookId,
  //         reviewer,
  //         text,
  //       });
  //       bookConnector.addReview({ review });
  //       return review;
  //     }
  //     return null
  //   },
  //
  //   updateBookReview: (_, { id, text }) =>
  //     reviewConnector.updateReview({ id, text }),
  //
  //   deleteBookReview: (_, { id }) => {
  //     reviewConnector.deleteReview({ id }),
  // },
};
