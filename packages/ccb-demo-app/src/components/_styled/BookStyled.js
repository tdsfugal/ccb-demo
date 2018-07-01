import styled from 'react-emotion';

export const BookChip = styled('div')`
  background-color: #fff;
  padding: 10px;
  margin: 0px 20px 20px 10px;
`;

export const BookTitle = styled('div')`
  font-size: 0.9em;
  font-weight: bold;
`;

export const BookAuthor = styled('div')`
  font-size: 0.6em;
  margin: 5px 0px 10px 30px;
`;

export const BookReviewList = styled('ul')`
  width: 95%;
`;

export const BookReviewItem = styled('li')`
  width: 95%;
  list-style-type: none;
`;

export const BookReview = styled('textarea')`
  font-size: 0.8em;
  width: 100%;
  background-color: #fdfdfe;
  border-left: solid #99d 7px;
  border-top: solid #555 1px;
  outline: none;
  resize: none;
  padding: 15px;
`;
