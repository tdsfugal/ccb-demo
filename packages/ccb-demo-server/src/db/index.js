import uuid from 'uuid';

import booksClearText from './booksClearText';
import { encryptString } from './crypto';

const db = booksClearText.reduce((acc, book) => {
  acc[uuid()] = { ...book, review: encryptString(book.review) };
  return acc;
}, {});

export default db;
