import React from 'react';

import { Mutation, Query } from 'react-apollo';

import {
  setSubscriptionTypeGQL,
  getSecurityStateGQL,
} from '../../../../graphql';

import { HeaderButton } from '../../../_styled';
import { SUBSCRIPTION, SECURE_SUBSCRIPTION } from '../../../../config';

export default function SubscriptionType() {
  return (
    <Mutation mutation={setSubscriptionTypeGQL}>
      {setSubscriptionType => (
        <Query query={getSecurityStateGQL}>
          {({ loading, error, data }) => {
            const subscriptionType =
              loading || error || !data || !data.securityState
                ? SUBSCRIPTION
                : data.securityState.subscriptionType;
            return (
              <HeaderButton
                backgroundColor={
                  subscriptionType === SUBSCRIPTION ? 'pink' : 'blue'
                }
                color={subscriptionType === SUBSCRIPTION ? 'black' : 'yellow'}
                onClick={() => {
                  if (subscriptionType === SUBSCRIPTION) {
                    setSubscriptionType({
                      variables: { subscriptionType: SECURE_SUBSCRIPTION },
                    });
                  } else {
                    setSubscriptionType({
                      variables: { subscriptionType: SUBSCRIPTION },
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
