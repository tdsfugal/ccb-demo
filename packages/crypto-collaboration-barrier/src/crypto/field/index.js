/* eslint-disable arrow-body-style */

const cryptoFunctions = {};

const initializeCCB = ({ encrypt, decrypt }) => {
  if (!encrypt || !decrypt)
    throw Error('CCB not provided with encrypt and decrypt');
  cryptoFunctions.encrypt = encrypt;
  cryptoFunctions.decrypt = decrypt;
};

const encryptField = field => {
  try {
    if (!(typeof field === 'string' || field instanceof String))
      throw new Error('CCB encryptField: Field must be string');
    return cryptoFunctions.encrypt(field);
  } catch (err) {
    console.log(`Failure on Encrypt with: ${field}`);
    return field;
  }
};

const decryptField = field => {
  try {
    if (!(typeof field === 'string' || field instanceof String))
      throw new Error('CCB encryptField: Field must be string');
    return cryptoFunctions.decrypt(field);
  } catch (err) {
    console.log(`Failure on Decrypt with: ${field}`);
    return field;
  }
};

export { initializeCCB, encryptField, decryptField };
