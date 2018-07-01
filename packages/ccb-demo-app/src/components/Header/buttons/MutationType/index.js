import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setMutationTypeGQL, getSecurityStateGQL } from '../../../../graphql';

import { HeaderButton } from '../../../_styled';

export default function MutationType() {
  return (
    <Mutation mutation={setMutationTypeGQL}>
      {setMutationType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const mutationType =
              loading || error || !data || !data.securityState
                ? 'Mutation'
                : data.securityState.mutationType;
            return (
              <HeaderButton
                backgroundColor={mutationType === 'Mutation' ? 'pink' : 'blue'}
                color={mutationType === 'Mutation' ? 'black' : 'yellow'}
                onClick={() => {
                  if (mutationType === 'Mutation') {
                    setMutationType({
                      variables: { mutationType: 'Secure Mutation' },
                    });
                  } else {
                    setMutationType({
                      variables: { mutationType: 'Mutation' },
                    });
                  }
                }}
              >
                {`${mutationType}`}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
