/* eslint-disable no-undef */
import { encrypt, decrypt } from './index';

describe('The two crypto functions should be inverses', () => {
  it('encrypt -> decrypt', () => {
    const expected = 'The quick brown fox jumped over the lazy dog. 12345!';
    const cText = encrypt(expected);
    const result = decrypt(cText);
    expect(cText).not.toEqual(expected);
    expect(result).toEqual(expected);
  });
});
