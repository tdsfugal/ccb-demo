import { Crypto } from 'ccb-demo-crypto';

// This is the crypto Singleton, trapped in this closure
// It is lazy instantiated and self-regenrating via getCrypto
let crypto = null;

export default function getCrypto() {
  if (!crypto) {
    crypto = new Crypto(); // Uses its own internal default password for now
  }
  return crypto;
}
