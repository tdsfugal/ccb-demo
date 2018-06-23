import React from 'react';

import { Mutation } from 'react-apollo';

// import { toggleSecureGQL } from '../../graphql';

import HeaderButton from './HeaderButton';

export default function Secure() {
  return <HeaderButton>Toggle Secure</HeaderButton>;
}
//
// export default function Secure() {
//   return (
//     <Mutation mutation={toggleSecureGQL}>
//       {toggleSecure => (
//         <HeaderButton onClick={() => toggleSecure()}>
//           Toggle Secure
//         </HeaderButton>
//       )}
//     </Mutation>
//   );
// }
