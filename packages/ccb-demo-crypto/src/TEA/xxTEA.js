/* eslint-disable
    no-mixed-operators,
    no-param-reassign,
    no-bitwise,
    no-plusplus,
    no-undef
*/

/**
 * XXTEA: encodes array of unsigned 32-bit integers using 128-bit key.
 *
 * @param   {number[]} v - Data vector.
 * @param   {number[]} k - Key.
 * @returns {number[]} Encoded vector.
 */
export function encode(v, k) {
  if (v.length < 2) v[1] = 0; // algorithm doesn't work for n<2 so fudge by adding a null
  const n = v.length;
  const delta = 0x9e3779b9;
  let q = Math.floor(6 + 52 / n);

  let z = v[n - 1];
  let y = v[0];
  let mx = 0;
  let e = 0;
  let sum = 0;

  while (q-- > 0) {
    // 6 + 52/n operations gives between 6 & 32 mixes on each word
    sum += delta;
    e = (sum >>> 2) & 3;
    for (let p = 0; p < n; p++) {
      y = v[(p + 1) % n];
      mx =
        (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
        ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
      v[p] += mx;
      z = v[p];
    }
  }

  return v;
}

/**
 * XXTEA: decodes array of unsigned 32-bit integers using 128-bit key.
 *
 * @param   {number[]} v - Data vector.
 * @param   {number[]} k - Key.
 * @returns {number[]} Decoded vector.
 */
export function decode(v, k) {
  const n = v.length;
  const delta = 0x9e3779b9;
  const q = Math.floor(6 + 52 / n);

  let z = v[n - 1];
  let y = v[0];
  let mx = q * delta;
  let e = mx;
  let sum = mx;

  while (sum !== 0) {
    e = (sum >>> 2) & 3;
    for (let p = n - 1; p >= 0; p--) {
      z = v[p > 0 ? p - 1 : n - 1];
      mx =
        (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
        ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
      v[p] -= mx;
      y = v[p];
    }
    sum -= delta;
  }

  return v;
}
