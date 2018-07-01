import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setQueryTypeGQL, getSecurityStateGQL } from '../../../../graphql';

import { HeaderButton } from '../../../_styled';

export default function QueryType() {
  return (
    <Mutation mutation={setQueryTypeGQL}>
      {setQueryType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const queryType =
              loading || error || !data || !data.securityState
                ? 'Query'
                : data.securityState.queryType;
            return (
              <HeaderButton
                backgroundColor={queryType === 'Query' ? 'pink' : 'blue'}
                color={queryType === 'Query' ? 'black' : 'yellow'}
                onClick={() => {
                  if (queryType === 'Query') {
                    setQueryType({ variables: { queryType: 'Secure Query' } });
                  } else {
                    setQueryType({ variables: { queryType: 'Query' } });
                  }
                }}
              >
                {`${queryType}`}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
