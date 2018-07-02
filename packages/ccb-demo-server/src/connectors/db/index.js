import { Crypto } from 'ccb-demo-crypto';

import { ENCRYPT_REVIEW_TEXT, ENCRYPT_REVIEWER } from '../../config';

import dbDefaults from './dbDefaults';

const crypto = new Crypto();

crypto.setCryptoOn();
// crypto.setCryptoOff();

/* eslint-disable no-param-reassign */
export default {
  books: dbDefaults.books.reduce((acc, book) => {
    acc[book.id] = {
      ...book,
      reviews: book.reviews.map(review => review.id),
    };
    return acc;
  }, {}),

  reviews: dbDefaults.books.reduce((acc1, book) => {
    const reviews = book.reviews.reduce((acc2, review) => {
      acc2[review.id] = {
        ...review,
        reviewer: ENCRYPT_REVIEWER
          ? crypto.encrypt(review.reviewer)
          : review.reviewer,
        text: ENCRYPT_REVIEW_TEXT ? crypto.encrypt(review.text) : review.text,
      };
      return acc2;
    }, {});
    return Object.assign(acc1, reviews);
  }, {}),
};
