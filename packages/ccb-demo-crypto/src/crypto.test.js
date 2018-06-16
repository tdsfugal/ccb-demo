/* eslint-disable no-undef */
import { encryptString, decryptString } from './index';

describe('The two crypto functions should be inverses', () => {
  it('encrypt -> decrypt', () => {
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    const bin = encryptString(expected);
    const result = decryptString(bin);
    expect(bin).not.toEqual(expected);
    expect(result).toEqual(expected);
  });
});
