import uuid from 'uuid';

import db from '../db';

const getBook = id => (id && db[id] ? { ...db[id], id } : null);

export default {
  Query: {
    books: () => (db ? Object.keys(db).map(id => getBook(id)) : null),
    book: (_, args) => (db ? getBook(args.id) : null),
  },

  Mutation: {
    addBook: (_, { title, author }) => {
      const id = uuid();
      db[id] = { title, author, review: '' };
      return getBook(id);
    },
    deleteBook: (_, { variables: { id } }) => {
      const gonner = getBook(id);
      if (gonner) delete db[id];
      return gonner;
    },
    updateReview: (_, { variables: { id, review } }) => {
      if (db[id]) db[id].review = review;
      return getBook(id);
    },
  },
};
