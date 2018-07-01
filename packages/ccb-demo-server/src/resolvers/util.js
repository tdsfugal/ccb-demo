import { reviewConnector } from '../connectors';

export function addReviewsToBook(book) {
  return {
    ...book,
    reviews: book.reviews.map(reviewId => reviewConnector.getReview(reviewId)),
  };
}
