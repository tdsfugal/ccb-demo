import styled from 'react-emotion';

/* eslint-disable arrow-body-style */

export const HeaderBanner = styled('header')`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0px;
  background-color: #ddf;
`;

export const HeaderTitle = styled('h1')`
  font-size: 1.3em;
  color: black;
  margin: 20px;
`;

export const HeaderButton = styled('button')`
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : '';
  }};
  ${({ color }) => {
    return color ? `color: ${color}` : '';
  }};
  border: solid 2px #888;
  margin: 20px;
  height: 40px;
  width: 160px;
  font-size: 0.7em;
  font-weight: bold;
  overflow: wrap;
`;

export const HeaderButtonGroup = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0px 40px 0px 20px;
`;
