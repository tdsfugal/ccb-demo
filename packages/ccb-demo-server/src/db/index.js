import uuid from 'uuid';
import { encrypt } from 'ccb-demo-crypto';

import booksClearText from './booksClearText';
import { ENCRYPT_REVIEW } from '../config';

export default booksClearText.reduce((acc, book) => {
  acc[uuid()] = {
    ...book,
    review: ENCRYPT_REVIEW ? encrypt(book.review) : book.review,
  };
  return acc;
}, {});
