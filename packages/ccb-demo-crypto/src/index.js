/* eslint-disable no-confusing-arrow */
const encrypt = text =>
  typeof text === 'string' || text instanceof String
    ? `ENCRYPTED - ${text}`
    : null;

const decrypt = hash =>
  typeof hash === 'string' || hash instanceof String ? hash.slice(12) : null;

const setupCrypto = options => console.log(options);

export { encrypt, decrypt, setupCrypto };
