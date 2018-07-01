import React from 'react';

import { Mutation, Query } from 'react-apollo';

import {
  setSubscriptionTypeGQL,
  getSecurityStateGQL,
} from '../../../../graphql';

import { HeaderButton } from '../../../_styled';

export default function SubscriptionType() {
  return (
    <Mutation mutation={setSubscriptionTypeGQL}>
      {setSubscriptionType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const subscriptionType =
              loading || error || !data || !data.securityState
                ? 'Subscription'
                : data.securityState.subscriptionType;
            return (
              <HeaderButton
                backgroundColor={
                  subscriptionType === 'Subscription' ? 'pink' : 'blue'
                }
                color={subscriptionType === 'Subscription' ? 'black' : 'yellow'}
                onClick={() => {
                  if (subscriptionType === 'Subscription') {
                    setSubscriptionType({
                      variables: { subscriptionType: 'Secure Subscription' },
                    });
                  } else {
                    setSubscriptionType({
                      variables: { subscriptionType: 'Subscription' },
                    });
                  }
                }}
              >
                {`${subscriptionType}`}
              </HeaderButton>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
}
