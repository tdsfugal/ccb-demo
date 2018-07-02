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

  Mutation: {
    addBook: (_, { title, author }) =>
      bookConnector.createBook({ title, author }),

    deleteBook: (_, { id }) => {
      const book = bookConnector.retrieveBook({ id });
      if (book) {
        book.reviews.forEach(review =>
          reviewConnector.deleteReview({ id: review.id }),
        );
        bookConnector.deleteBook({ id });
        return book;
      }
      return null;
    },

    createBookReview: (_, { bookId, reviewer, text }) => {
      const book = bookConnector.retrieveBook(bookId);
      if (book) {
        const review = reviewConnector.createReview({
          bookId,
          reviewer,
          text,
        });
        book.reviews.push(review.id);
        bookConnector.updateBook({ book });
        return review;
      }
      return null;
    },

    updateBookReview: (_, { id, text }) =>
      reviewConnector.updateReview({ id, text }),

    deleteBookReview: (_, { id }) => {
      const review = reviewConnector.retrieveReview({ id });
      if (review) {
        const { bookId } = review;
        const book = bookConnector.retrieveBook({ id: bookId });
        if (book) {
          const { reviews } = book;
          console.log(reviews);
          console.log(id);
          let index = reviews.indexOf(id);
          while (index >= 0 && index < reviews.length) {
            reviews.splice(index, 1);
            index = reviews.indexOf(id);
            console.log(reviews);
          }
          book.reviews = reviews;
          bookConnector.updateBook({ book });
        }
        return reviewConnector.deleteReview({ id });
      }
      return null;
    },
  },
};
