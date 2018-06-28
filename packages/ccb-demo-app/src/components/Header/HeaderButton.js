import styled from 'react-emotion';

export default styled('button')`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: solid 2px #888;
  margin: 20px;
  height: 40px;
  width: 70px;
  font-size: 0.6em;
  overflow: wrap;
`;
