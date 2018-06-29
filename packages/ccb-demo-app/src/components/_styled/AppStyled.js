import styled from 'react-emotion';

export const App = styled('div')`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const Demo = styled('div')`
  height: fill-available;
  width: fill-available;
  margin: 80px 0px 0px 0px;
  padding: 0px;
  background-color: #fff;
  overflow-y: scroll;
`;

export const BookList = styled('ul')`
  list-style-type: none;
  background-color: #f8f8f8;
  padding: 40px;
  margin: 0px;
`;
