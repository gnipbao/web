import rethinkdbdash from 'rethinkdbdash';

export const config = {
  host: process.env.RDB_HOST || settings.rethinkdb.host,
  port: process.env.RDB_PORT || settings.rethinkdb.port,
  db: process.env.RDB_DB || settings.rethinkdb.db,
  buffer: process.env.RDB_CONNECTIONS_MIN || settings.rethinkdb.buffer,
  max: process.env.RDB_CONNECTIONS_MAX || settings.rethinkdb.max
}

export default rethinkdbdash(config);
