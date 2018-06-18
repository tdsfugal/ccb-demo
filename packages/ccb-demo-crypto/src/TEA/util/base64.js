/* eslint-disable no-undef */
/**
 * Encodes base64 -
 *      developer.mozilla.org/en-US/docs/Web/API/window.btoa,
 *      nodejs.org/api/buffer.html
 */
export function base64Encode(str) {
  if (typeof btoa !== 'undefined') return btoa(str); // browser
  if (typeof Buffer !== 'undefined')
    return Buffer.from(str, 'binary').toString('base64'); // Node.js
  throw new Error('No Base64 Encode');
}

/**
 * Decodes base64
 */
export function base64Decode(b64Str) {
  if (typeof atob === 'undefined' && typeof Buffer === 'undefined')
    throw new Error('No base64 decode');
  try {
    if (typeof atob !== 'undefined') return atob(b64Str); // browser
    return Buffer.from(b64Str, 'base64').toString('binary'); // Node.js
  } catch (e) {
    throw new Error('Invalid ciphertext');
  }
}
