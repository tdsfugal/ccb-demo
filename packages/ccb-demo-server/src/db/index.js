import uuid from 'uuid';
import { encrypt } from 'ccb-demo-crypto';

import booksClearText from './booksClearText';

const db = booksClearText.reduce((acc, book) => {
  acc[uuid()] = { ...book, review: encrypt(book.review) };
  return acc;
}, {});

export default db;
