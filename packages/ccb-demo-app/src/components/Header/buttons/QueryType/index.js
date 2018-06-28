import React from 'react';

import { Mutation, Query } from 'react-apollo';

import {
  setQueryTypeGQL,
  getSecurityStateGQL,
} from '../../../../graphql/operations';

import HeaderButton from '../HeaderButton';

export default function Secured() {
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
                    setQueryType({ variables: { queryType: 'SecureQuery' } });
                  } else {
                    setQueryType({ variables: { queryType: 'Query' } });
                  }
                }}
              >
                {`<${queryType} ...`}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
