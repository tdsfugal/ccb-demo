import booksClearText from './booksClearText';
import { encryptString } from './crypto';

const ids = Object.keys(booksClearText);

const db = ids.reduce((acc, id) => {
  const book = booksClearText[id];
  book.review = encryptString(book.review);
  acc[id] = book;
  return acc;
}, {});

export default db;
