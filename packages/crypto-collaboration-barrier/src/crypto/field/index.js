import { encrypt, decrypt } from 'ccb-demo-crypto';

export function encryptField(field) {
  return typeof field === 'string' || field instanceof String
    ? encrypt(field)
    : field;
}

export function decryptField(field) {
  return typeof field === 'string' || field instanceof String
    ? decrypt(field)
    : field;
}
