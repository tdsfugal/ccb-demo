/* eslint-disable function-paren-newline */

// import reviewConnector from './index';

export default class BookConnector {
  constructor(dbDefaults) {
    const db = dbDefaults.books || {};

    this.getBook = id => {
      if (!id || !db[id]) return null;
      return { ...db[id], __typename: 'Book' };
    };

    this.getBooks = () => Object.keys(db).map(id => this.getBook(id));
  }
}
