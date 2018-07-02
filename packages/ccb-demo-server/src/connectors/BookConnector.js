/* eslint-disable function-paren-newline arrow-body-style  */
import uuid from 'uuid';

export default class BookConnector {
  constructor(dbDefaults) {
    const db = dbDefaults.books || {};

    this.getBooks = () => Object.keys(db).map(id => this.retrieveBook({ id }));

    this.retrieveBook = ({ id }) => {
      if (!id || !db[id]) return null;
      return { ...db[id], __typename: 'Book' };
    };

    this.createBook = ({ author, title }) => {
      const id = uuid();
      db[id] = { title, author, reviews: {} };
      return this.retrievBook({ id });
    };

    this.updateBook = ({ book }) => {
      if (db[book.id]) {
        db[book.id] = book;
        return book;
      }
      return null;
    };

    this.deleteBook = ({ id }) => {
      const gonner = this.retrieveBook({ id });
      if (gonner) {
        delete db[id];
        return gonner;
      }
      return null;
    };
  }
}
