import logger from 'debug-dude';
import LRU from 'lru-cache';
import crypto from 'crypto';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

import template from 'templates/index';
import Root from 'containers/Root';

const { error } = logger('app:server');

export default async (req, res) => {
};
