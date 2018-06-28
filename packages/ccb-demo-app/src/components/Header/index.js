import React from 'react';
import { string } from 'prop-types';
import styled from 'react-emotion';

import AddBook from './buttons/AddBook';
import Secured from './buttons/Secured';

const Banner = styled('header')`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 0px;
  background-color: #ddf;
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
      <AddBook />
      <Secured />
    </Banner>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
