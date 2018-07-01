import BookConnector from './BookConnector';
import ReviewConnector from './ReviewConnector';

import database from '../db';

const bookConnector = new BookConnector(database);
const reviewConnector = new ReviewConnector(database);

export { bookConnector, reviewConnector };
