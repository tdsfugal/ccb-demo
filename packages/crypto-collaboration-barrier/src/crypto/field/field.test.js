/* eslint-disable no-undef, import/first, no-unused-vars */

import { encryptField, decryptField } from './index';

describe('The cipher functions ', () => {
  it('should encrypt when the argument is a string', () => {
    const original = 'this is a string';
    expect(encryptField(original)).not.toEqual(original);
  });

  it('should decrypt when the argument is a string', () => {
    const original = 'fiHDvpN5QOnXsn9VjAOH5A==';
    expect(decryptField(original)).not.toEqual(original);
  });

  it('should be inverses when the argument is a string', () => {
    const original = 'this is a string';
    expect(decryptField(encryptField(original))).toEqual(original);
  });

  it('EncryptField should pass through unchanged all other data types', () => {
    expect(encryptField(true)).toEqual(true);
    expect(encryptField(2)).toEqual(2);
    expect(encryptField({ foo: 'bar' })).toEqual({ foo: 'bar' });
    expect(encryptField([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('DecryptField should pass through unchanged all other data types', () => {
    expect(decryptField(true)).toEqual(true);
    expect(decryptField(2)).toEqual(2);
    expect(decryptField({ foo: 'bar' })).toEqual({ foo: 'bar' });
    expect(decryptField([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
