import uuid from 'uuid';

import booksClearText from './booksClearText';
import { encryptString } from './crypto';

const ENCRYPT_REVIEW = false;

const db = booksClearText.reduce((acc, book) => {
  acc[uuid()] = ENCRYPT_REVIEW ? { ...book, review: encryptString(book.review) } : book;
  return acc;
}, {});

export default db;
