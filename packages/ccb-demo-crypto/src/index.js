import TEA from './TEA';

/* eslint-disable no-console */

const setupCrypto = () => null;

const PASSWORD = 'secret-sauce';

const encrypt = (plainText, password = PASSWORD) =>
  TEA.encrypt(plainText, password);

const decrypt = (cypherText, password = PASSWORD) =>
  TEA.decrypt(cypherText, password);

export { encrypt, decrypt, setupCrypto };
