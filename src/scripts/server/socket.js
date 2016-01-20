import logger from 'debug-dude';
import SocketIO from 'socket.io';

const { log, info, warn, error } = logger('app:server');

export function setup(server) {
  const io = new SocketIO(server);
  io.on('connection', socket => {
    log('client connected');

    socket.emit('message', { text: 'whats up?' });

    socket.on('ping', () => {
      socket.emit('message', { text: 'pong' });
    });

    socket.on('disconnect', () => {
      log('client disconnected');
    });
  });
}
