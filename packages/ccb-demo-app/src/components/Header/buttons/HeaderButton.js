import styled from 'react-emotion';

/* eslint-disable arrow-body-style */

export default styled('button')`
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : '';
  }};
  ${({ color }) => {
    return color ? `color: ${color}` : '';
  }};
  border: solid 2px #888;
  margin: 20px;
  height: 40px;
  width: 140px;
  font-size: 0.7em;
  font-weight: bold;
  overflow: wrap;
`;
