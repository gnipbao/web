import io from 'socket.io-client';
import { bindActionCreators } from 'redux';

import * as actions from 'modules/notifications/actions';

export function setup(store) {
  const port = process.env.PORT || settings.port || 80;
  const socket = io(`http://localhost:${port}`);

  const notification = bindActionCreators(actions, store.dispatch);

  // TODO: connection events should be reflected in UI in dev env at least
  // using notifications, snackbar or something similar
  //
  // see https://github.com/socketio/socket.io-client#events-1

  socket.on('connect', () => {
    notification.create('success', 'connected', 'System');
  });

  socket.on('disconnect', () => {
    notification.create('error', 'disconnected', 'System');
  });

  socket.on('message', data => {
    notification.create('info', `server says: ${data.text}`, 'Message');
  });

  socket.on('join', data => {
    const { user: { firstName, lastName }, room } = data;
    const username = `${firstName} ${lastName}`;
    notification.create('info', `${username} joined ${room.name}`);
  });

  socket.on('leave', data => {
    const { user: { firstName, lastName }, room } = data;
    const username = `${firstName} ${lastName}`;
    notification.create('info', `${username} left ${room.name}`);
  });

  return socket;
}
