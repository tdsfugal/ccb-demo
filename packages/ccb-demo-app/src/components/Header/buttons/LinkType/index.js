import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setLinkStateGQL, getLinkStateGQL } from '../../../../graphql';

import { HeaderButton } from '../../../_styled';
import { HTTP_LINK, WEB_SOCKET_LINK } from '../../../../config';

export default function LinkType() {
  return (
    <Mutation mutation={setLinkStateGQL}>
      {setLinkState => (
        <Query query={getLinkStateGQL}>
          {({ loading, error, data }) => {
            const linkState =
              loading || error || !data ? HTTP_LINK : data.linkState;
            return (
              <HeaderButton
                backgroundColor={linkState === HTTP_LINK ? '#ccc' : '#333'}
                color={linkState === HTTP_LINK ? '333' : '#ccc'}
                onClick={() => {
                  if (linkState === HTTP_LINK) {
                    setLinkState({ variables: { linkType: WEB_SOCKET_LINK } });
                  } else {
                    setLinkState({ variables: { linkType: HTTP_LINK } });
                  }
                }}
              >
                {`${linkState}`}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
