import React from 'react';

import { Mutation, Query } from 'react-apollo';

import { setQueryTypeGQL, getSecurityStateGQL } from '../../../../graphql';

import { HeaderButton } from '../../../_styled';
import { QUERY, SECURE_QUERY } from '../../../../config';

export default function QueryType() {
  return (
    <Mutation mutation={setQueryTypeGQL}>
      {setQueryType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const queryType =
              loading || error || !data || !data.securityState
                ? QUERY
                : data.securityState.queryType;
            return (
              <HeaderButton
                backgroundColor={queryType === QUERY ? 'pink' : 'blue'}
                color={queryType === QUERY ? 'black' : 'yellow'}
                onClick={() => {
                  if (queryType === QUERY) {
                    setQueryType({ variables: { queryType: SECURE_QUERY } });
                  } else {
                    setQueryType({ variables: { queryType: QUERY } });
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
