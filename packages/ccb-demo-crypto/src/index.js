import TEA from './TEA';

/* eslint-disable no-unused-vars, arrow-body-style, no-console, import/prefer-default-export */

const DEFAULT_PASSWORD = 'Using this should be a security error';

export class Crypto {
  constructor() {
    // These variables are hidden by the constructor closure
    const secretPassword = DEFAULT_PASSWORD;
    let on = true;

    this.setCryptoOn = () => {
      console.log('Setting Crytpo ON');
      on = true;
    };

    this.setCryptoOff = () => {
      console.log('Setting Crypto OFF');
      on = false;
    };

    this.encrypt = (plainText, options) => {
      return on ? TEA.encrypt(plainText, secretPassword) : plainText;
    };

    this.decrypt = (cypherText, options) => {
      return on ? TEA.decrypt(cypherText, secretPassword) : cypherText;
    };
  }
}
