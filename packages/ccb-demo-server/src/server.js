import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const PORT = 4002;

// Start the app
express()
  .use('/graphql', bodyParser.json(), graphqlExpress({ schema })) // The API
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) // A development endpoint
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
  });
