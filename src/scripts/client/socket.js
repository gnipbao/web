import io from 'socket.io-client';

export function setup() {
  const port = process.env.PORT || settings.port || 80;
  const socket = io(`http://localhost:${port}`);

  // TODO: connection events should be reflected in UI in dev env at least
  // using notifications, snackbar or something similar
  //
  // see https://github.com/socketio/socket.io-client#events-1

  socket.on('connect', () => {
    console.log('[PARTY] connected');
  });

  socket.on('message', data => {
    console.log('[PARTY] server says: ', data.text);
  });

  return socket;
}
