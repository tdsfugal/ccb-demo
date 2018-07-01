import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setMutationTypeGQL, getSecurityStateGQL } from '../../../../graphql';

import { HeaderButton } from '../../../_styled';
import { MUTATION, SECURE_MUTATION } from '../../../../config';

export default function MutationType() {
  return (
    <Mutation mutation={setMutationTypeGQL}>
      {setMutationType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const mutationType =
              loading || error || !data || !data.securityState
                ? MUTATION
                : data.securityState.mutationType;
            return (
              <HeaderButton
                backgroundColor={mutationType === MUTATION ? 'pink' : 'blue'}
                color={mutationType === MUTATION ? 'black' : 'yellow'}
                onClick={() => {
                  if (mutationType === MUTATION) {
                    setMutationType({
                      variables: { mutationType: SECURE_MUTATION },
                    });
                  } else {
                    setMutationType({
                      variables: { mutationType: MUTATION },
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
