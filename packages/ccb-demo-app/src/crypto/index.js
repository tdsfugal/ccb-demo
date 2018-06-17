export function encryptString(text) {
  const hash = `ENCRYPTED - ${text}`;
  return hash;
}

export function decryptString(hash) {
  const text = hash.slice(12);
  return text;
}
