import React from 'react';
import { string } from 'prop-types';

import AddBook from './buttons/AddBook';
import QueryType from './buttons/QueryType';
import MutationType from './buttons/MutationType';
import Authenticate from './buttons/Authenticate';

import { HeaderBanner, HeaderTitle, HeaderButtonGroup } from '../_styled';

export default function Header({ title }) {
  return (
    <HeaderBanner>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtonGroup>
        <AddBook />
        <QueryType />
        <MutationType />
        <Authenticate />
      </HeaderButtonGroup>
    </HeaderBanner>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
