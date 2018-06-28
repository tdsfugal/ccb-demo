import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';

import schema from './schema';
import { PORT } from './config';

// Start the app
express()
  .use(cors())
  .use('/graphql', bodyParser.json(), graphqlExpress({ schema })) // The API
  .use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) // A development endpoint
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
  });
