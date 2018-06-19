/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Block TEA (xxtea) Tiny Encryption Algorithm                        (c) Chris Veness 2002-2017  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/tea-block.html                                                  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

import { encode, decode } from './xxTEA';

import {
  strToLongs,
  longsToStr,
  utf8Encode,
  utf8Decode,
  base64Encode,
  base64Decode,
} from './util';

/**
 * Tiny Encryption Algorithm. David Wheeler & Roger Needham, Cambridge University Computer Lab.
 *
 * www.movable-type.co.uk/scripts/tea.pdf   - TEA, a Tiny Encryption Algorithm (1994)
 * www.movable-type.co.uk/scripts/xtea.pdf  - Tea extensions (1997)
 * www.movable-type.co.uk/scripts/xxtea.pdf - Correction to xtea (1998)
 */

export default class Tea {
  /**
   * Encrypts text using Corrected Block TEA (xxtea) algorithm.
   *
   * @param   {string} plaintext - String to be encrypted (multi-byte safe).
   * @param   {string} password - Password to be used for encryption (1st 16 chars).
   * @returns {string} Encrypted text (encoded as base64).
   */
  static encrypt(plaintext, password) {
    const ptext = String(plaintext);
    const pword = String(password);

    if (ptext.length === 0) return ''; // nothing to encrypt

    //  v is n-word data vector; converted to array of longs from UTF-8 string
    const v = strToLongs(utf8Encode(ptext));
    //  k is 4-word key; simply convert first 16 chars of password as key
    const k = strToLongs(utf8Encode(pword).slice(0, 16));

    const cipher = encode(v, k);

    // convert array of longs to string
    const ciphertext = longsToStr(cipher);

    // convert binary string to base64 ascii for safe transport
    return base64Encode(ciphertext);
  }

  /**
   * Decrypts text using Corrected Block TEA (xxtea) algorithm.
   *
   * @param   {string} ciphertext - String to be decrypted.
   * @param   {string} password - Password to be used for decryption (1st 16 chars).
   * @returns {string} Decrypted text.
   * @throws  {Error}  Invalid ciphertext
   */
  static decrypt(ciphertext, password) {
    const ctext = String(ciphertext);
    const pword = String(password);

    if (ctext.length === 0) return ''; // nothing to decrypt

    //  v is n-word data vector; converted to array of longs from base64 string
    const v = strToLongs(base64Decode(ctext));
    //  k is 4-word key; simply convert first 16 chars of password as key
    const k = strToLongs(utf8Encode(pword).slice(0, 16));

    const plain = decode(v, k);

    const ptext = longsToStr(plain);

    // strip trailing null chars resulting from filling 4-char blocks:
    return utf8Decode(ptext.replace(/\0+$/, ''));
  }
}
