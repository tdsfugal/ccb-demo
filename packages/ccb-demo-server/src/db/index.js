import uuid from 'uuid';
import { Crypto } from 'ccb-demo-crypto';

import { ENCRYPT_REVIEW } from '../config';

import booksClearText from './booksClearText';

const crypto = new Crypto();

crypto.setCryptoOn();
// crypto.setCryptoOff();

export default booksClearText.reduce((acc, book) => {
  acc[uuid()] = {
    ...book,
    review: ENCRYPT_REVIEW ? crypto.encrypt(book.review) : book.review,
  };
  return acc;
}, {});
