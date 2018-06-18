import TEA from './TEA';

const setupCrypto = () => null;

const PASSWORD = 'secret-sauce';

const encrypt = plainText => TEA.encrypt(plainText, PASSWORD);

const decrypt = cypherText => TEA.decrypt(cypherText, PASSWORD);

export { encrypt, decrypt, setupCrypto };
