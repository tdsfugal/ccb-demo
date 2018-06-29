/* eslint-disable no-undef */
import Crypto from './index';

describe('The Crypto Object ', () => {
  it('should default to ON when constructed', () => {
    const crypto = new Crypto();
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    const cText = crypto.encrypt(expected);
    expect(cText).not.toEqual(expected);
  });

  it('should stop encrypting when turned off', () => {
    const crypto = new Crypto();
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    crypto.setCryptoOff();
    const cTextOff = crypto.encrypt(expected);
    expect(cTextOff).toEqual(expected);
  });

  it('should stop decrypting when turned off', () => {
    const crypto = new Crypto();
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    crypto.setCryptoOn();
    const cText = crypto.encrypt(expected);
    crypto.setCryptoOff();
    const pTextOff = crypto.decrypt(cText);
    expect(pTextOff).not.toEqual(expected);
    expect(pTextOff).toEqual(cText);
  });

  it('should have encrypt and decrypt methods that are inverses', () => {
    const crypto = new Crypto();
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    const cText = crypto.encrypt(expected);
    expect(crypto.decrypt(cText)).toEqual(expected);
  });

  it('should construct with different passwords', () => {
    const cryptoA = new Crypto({ password: 'this phrase is not like' });
    const cryptoB = new Crypto({ password: 'this other pass phrase' });
    const testText = 'The quick brown fox jumped over the lazy dog. 12345!';
    const cTextA = cryptoA.encrypt(testText);
    const cTextB = cryptoB.decrypt(testText);
    expect(cTextA).not.toEqual(cTextB);
  });
});
