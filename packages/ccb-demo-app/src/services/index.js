/* eslint-disable no-unused-vars */

// Importing ccb starts both the CCB and Crypto services
import './ccb';

// Start the authentication "service"
// ...someday these handles may be used to shut things down. For now they can be ignored.
import authenticationHandle from './authenticated';
