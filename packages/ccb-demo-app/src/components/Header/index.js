import React from 'react';
import { string } from 'prop-types';

import {
  AddBook,
  QueryType,
  MutationType,
  SubscriptionType,
  LinkType,
  Authenticate,
} from './buttons';

import { HeaderBanner, HeaderTitle, HeaderButtonGroup } from '../_styled';

export default function Header({ title }) {
  return (
    <HeaderBanner>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtonGroup>
        <AddBook />
        <QueryType />
        <MutationType />
        <SubscriptionType />
        <LinkType />
        <Authenticate />
      </HeaderButtonGroup>
    </HeaderBanner>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
