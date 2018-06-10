/* eslint-disable no-confusing-arrow */
const encryptString = text =>
  typeof text === 'string' || text instanceof String
    ? `ENCRYPTED - ${text}`
    : null;

const decryptString = hash =>
  typeof hash === 'string' || hash instanceof String ? hash.slice(12) : null;

export { encryptString, decryptString };
