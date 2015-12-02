import forever, { Monitor } from 'forever-monitor';

export default (name, filename, config) => {
  const { debug, info, error } = dude(`app:${name}`);

  debug(`creating monitor to watch for ${name}: ${filename}...`);

  const monitor = new Monitor(filename, {
    silent: true,
    max: 1,
    ...config
  });

  monitor.on('stdout', buffer => info(buffer.toString()));
  monitor.on('stderr,' ::error);

  return monitor.start();
};
