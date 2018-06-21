import uuid from 'uuid';

import booksClearText from './booksClearText';
import { encryptString } from './crypto';

const ENCRYPT_REVIEW = false

const db = ENCRYPT_REVIEW
  ? booksClearText.reduce((acc, book) => {
      acc[uuid()] = { ...book, review: encryptString(book.review) };
      return acc;
    }, {})
  : booksClearText

export default db;
