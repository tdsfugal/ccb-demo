import uuid from 'uuid';
import { encrypt } from 'ccb-demo-crypto';

import booksClearText from './booksClearText';

const ENCRYPT_REVIEW = true;

export default booksClearText.reduce((acc, book) => {
  acc[uuid()] = ENCRYPT_REVIEW ? { ...book, review: encrypt(book.review) } : book;
  return acc;
}, {});
