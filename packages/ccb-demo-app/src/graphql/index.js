import createClient from './createClient';

export * from './operations';

// This reference is hidden by the closure on this module
let client = null;
export default function getApolloClient() {
  // Lazy instantiate client
  if (!client) client = createClient();
  // Provide the client
  return client;
}
