/* eslint-disable no-mixed-operators, no-bitwise, no-plusplus */
/**
 * Converts string to array of longs (each containing 4 chars).
 */
export function strToLongs(s) {
  // note chars must be within ISO-8859-1 (Unicode code-point <= U+00FF) to fit 4/long
  const l = new Array(Math.ceil(s.length / 4));
  for (let i = 0; i < l.length; i++) {
    // note little-endian encoding - endianness is irrelevant as long as it matches longsToStr()
    l[i] =
      s.charCodeAt(i * 4) +
      (s.charCodeAt(i * 4 + 1) << 8) +
      (s.charCodeAt(i * 4 + 2) << 16) +
      (s.charCodeAt(i * 4 + 3) << 24);
  }
  // note running off the end of the string generates nulls; bitwise operators treat NaN as 0
  return l;
}

/**
 * Converts array of longs to string.
 */
export function longsToStr(l) {
  let str = '';
  for (let i = 0; i < l.length; i++) {
    str += String.fromCharCode(
      l[i] & 0xff,
      (l[i] >>> 8) & 0xff,
      (l[i] >>> 16) & 0xff,
      (l[i] >>> 24) & 0xff,
    );
  }
  return str;
}
