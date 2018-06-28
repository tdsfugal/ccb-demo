/**
 * Encodes multi-byte string to utf8 - monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
 */
export function utf8Encode(str) {
  return unescape(encodeURIComponent(str));
}

/**
 * Decodes utf8 string to multi-byte
 */
export function utf8Decode(utf8Str) {
  try {
    return decodeURIComponent(escape(utf8Str));
  } catch (e) {
    return utf8Str; // invalid UTF-8? return as-is
  }
}
