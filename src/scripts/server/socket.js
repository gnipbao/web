import assert from 'assert';
import logger from 'debug-dude';
import SocketIO from 'socket.io';
import { camelizeKeys } from 'humps';

import db from 'server/db/driver';
import { connect, config } from 'server/db';

const { log, info, warn, error } = logger('app:server');

export function setup(server) {
  const io = new SocketIO(server);

  io.on('connection', async socket => {
    log('client connected');

    socket.emit('message', { text: 'whats up?' });

    const feed = await db.table('room_users').changes().run();
    feed.each(async (err, row) => {
      if (err) {
        assert(err instanceof Error);
        console.log(err.toString());
        console.log(err.stack);
      }

      const newVal = row.new_val
      const oldVal = row.old_val;

      const roomUser = row.old_val || row.new_val;
      const room = await db.table('rooms').get(roomUser.room_id).pluck('name');
      const user = await db.table('users').get(roomUser.user_id);
      const entered = !!row.new_val;

      const action = entered ? 'join' : 'leave';

      const payload = camelizeKeys({ user, room });

      console.log(payload);

      socket.emit(action, payload);
    });

    socket.on('ping', () => {
      socket.emit('message', { text: 'pong' });
    });

    socket.on('disconnect', () => {
      log('client disconnected');
    });
  });
}
