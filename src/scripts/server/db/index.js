import pick from 'lodash/pick';
import logger from 'debug-dude';
import rethinkdb from 'rethinkdb';

const { log, info, warn, error } = logger('app:server');

const config = {
  host: process.env.RDB_HOST || settings.rethinkdb.host,
  port: process.env.RDB_PORT || settings.rethinkdb.port,
  db: process.env.RDB_DB || settings.rethinkdb.db,

  tables: {
    'users': 'id',
    'providers': 'id',
    'invites': 'id',
    'identities': 'id',
    'favorites': 'id',
    'rooms': 'id',
    'room_users': 'id',
    'room_tracks': 'id',
    'playlists': 'id',
    'playlist_tracks': 'id',
    'tracks': 'id'
  }
};

const connectionSettings = pick(config, 'host', 'port');

export function run(callback) {
  rethinkdb.connect(connectionSettings, callback);
}

export function setup(callback) {
  run((err, connection) => {
    // It seems like I have nothing to do here, e.g. no default setup logic or smth,
    // because I use RethinkDB as a readonly single source of truth.

    if (callback) callback(err, connection);
  });
}
