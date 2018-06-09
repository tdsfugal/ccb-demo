import React from 'react';
import { string } from 'prop-types';
import styled from 'react-emotion';

const Banner = styled('header')`
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 0px;
  background-color: #ddd;
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
    </Banner>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
