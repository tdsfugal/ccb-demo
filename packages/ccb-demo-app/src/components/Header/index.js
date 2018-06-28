import React from 'react';
import { string } from 'prop-types';
import styled from 'react-emotion';

import AddBook from './buttons/AddBook';
import QueryType from './buttons/QueryType';
import Authenticate from './buttons/Authenticate';

const Banner = styled('header')`
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

const Buttons = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 0px 40px 0px 20px;
`;

const Title = styled('h1')`
  font-size: 1.3em;
  color: black;
  margin: 20px;
`;

export default function Header({ title }) {
  return (
    <Banner>
      <Title>{title}</Title>
      <Buttons>
        <AddBook />
        <QueryType />
        <Authenticate />
      </Buttons>
    </Banner>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
