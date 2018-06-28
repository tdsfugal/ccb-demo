import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setSecuredGQL, getSecurityStateGQL } from '../../graphql/operations';

import HeaderButton from './HeaderButton';

export default function Secured() {
  return (
    <Mutation mutation={setSecuredGQL}>
      {setSecured => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const isSecured =
              loading || error || !data || !data.securityState
                ? false
                : data.securityState.isSecured;
            return (
              <HeaderButton
                backgroundColor={isSecured ? '#AFA' : '#F66'}
                onClick={() =>
                  setSecured({
                    variables: {
                      secured: !isSecured,
                    },
                  })
                }
              >
                {isSecured ? 'Logged In' : 'Unknown'}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
