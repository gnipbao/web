import createLogger from 'redux-logger';

const logger = createLogger();

export default __CLIENT__ ? [logger] : [];
