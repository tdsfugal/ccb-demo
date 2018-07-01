import gql from 'graphql-tag';

export const getLinkStateGQL = gql`
  query getLinkState @client {
    linkState
  }
`;

export const setLinkStateGQL = gql`
  mutation setLinkStateType($linkType: String!) {
    setLinkState(linkType: $linkType) @client
  }
`;
