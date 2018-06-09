import db from '../db';

export default {
  Query: {
    books: () => (db ? Object.keys(db).map(id => db[id]) : null),
    book: (_, args) => (args.id && db[args.id] ? db[args.id] : null),
  },
};
