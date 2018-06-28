import React from 'react';

import { Mutation, Query } from 'react-apollo';

import {
  setAuthenticationGQL,
  getSecurityStateGQL,
} from '../../../../graphql/operations';

import HeaderButton from '../HeaderButton';

export default function Authenticate() {
  return (
    <Mutation mutation={setAuthenticationGQL}>
      {setAuthentication => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const isAuthenticated =
              loading || error || !data || !data.securityState
                ? false
                : data.securityState.isAuthenticated;
            return (
              <HeaderButton
                backgroundColor={isAuthenticated ? '#AFA' : '#F66'}
                color={isAuthenticated ? 'black' : 'yellow'}
                onClick={() =>
                  setAuthentication({
                    variables: {
                      authenticated: !isAuthenticated,
                    },
                  })
                }
              >
                {isAuthenticated ? 'Authentiated' : 'Stranger'}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
