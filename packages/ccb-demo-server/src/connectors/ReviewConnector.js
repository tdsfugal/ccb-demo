export default class ReviewConnector {
  constructor(dbDefaults) {
    const db = dbDefaults.reviews || {};

    this.getReview = id => {
      if (!id || !db[id]) return null;
      return { ...db[id], __typename: 'BookReview' };
    };
  }
}
