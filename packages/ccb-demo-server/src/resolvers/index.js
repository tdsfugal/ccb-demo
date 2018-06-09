import db from '../db';

const getBook = id => (id && db[id] ? Object.assign({}, db[id], { id }) : null);

export default {
  Query: {
    books: () => (db ? Object.keys(db).map(id => getBook(id)) : null),
    book: (_, args) => (db ? getBook(args.id) : null),
  },
};
