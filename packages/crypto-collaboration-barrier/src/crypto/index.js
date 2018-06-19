export { default as decryptData } from './decryptData';
export { default as encryptData } from './encryptData';
export { default as encryptVars } from './encryptVars';

const crypto = {};

const setupCCB = options => {
  crypto.encrypt = options.encrypt ? options.encrypt : null;
  crypto.decrypt = options.decrypt ? options.decrypt : null;
};

export default setupCCB;
