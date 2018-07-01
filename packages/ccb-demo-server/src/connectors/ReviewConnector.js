import uuid from 'uuid';

export default class ReviewConnector {
  constructor(dbDefaults) {
    const db = dbDefaults.reviews || {};

    this.createReview = ({ bookId, reviewer, text }) => {
      const reviewId = uuid();
      db[reviewId] = {
        id: reviewId,
        bookId,
        reviewer,
        text,
      };
      return this.retrieveReview({ reviewId });
    };

    this.retrieveReview = ({ id }) => {
      if (!id || !db[id]) return null;
      return { ...db[id], __typename: 'BookReview' };
    };

    this.updateReview = ({ id, text }) => {
      if (db[id]) {
        db[id].text = text;
        return this.retrieveReview({ id });
      }
      return null;
    };

    this.deleteReview = ({ id }) => {
      const gonner = db[id];
      if (gonner) {
        delete db[id];
        return gonner;
      }
      return null;
    };
  }
}
