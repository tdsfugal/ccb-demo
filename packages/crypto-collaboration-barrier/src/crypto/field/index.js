/* eslint-disable arrow-body-style */

const cryptoFunctions = {};

const initializeCCB = ({ encrypt, decrypt }) => {
  if (!encrypt || !decrypt)
    throw Error('CCB not provided with encrypt and decrypt');
  cryptoFunctions.encrypt = encrypt;
  cryptoFunctions.decrypt = decrypt;
};

const encryptField = field => {
  return typeof field === 'string' || field instanceof String
    ? cryptoFunctions.encrypt(field)
    : field;
};

const decryptField = field => {
  return typeof field === 'string' || field instanceof String
    ? cryptoFunctions.decrypt(field)
    : field;
};

export { initializeCCB, encryptField, decryptField };
