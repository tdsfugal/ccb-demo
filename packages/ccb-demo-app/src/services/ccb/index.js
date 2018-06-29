import { initializeCCB } from 'crypto-collaboration-barrier';

import getCrypto from '../crypto';

initializeCCB({
  encrypt: (plainText, options) => getCrypto().encrypt(plainText, options),
  decrypt: (cypherText, options) => getCrypto().decrypt(cypherText, options),
});
