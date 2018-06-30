import React from 'react';
import { string, func } from 'prop-types';

import { BookReview } from '../_styled';

export default function BookReviewEditor({ value, update }) {
  return <BookReview type="text" value={value} onChange={e => update(e.target.value)} />;
}

BookReviewEditor.propTypes = {
  value: string.isRequired,
  update: func.isRequired,
};
