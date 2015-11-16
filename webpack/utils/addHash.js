import { env } from '../../config';

export default (template, hash) => {
  return env.production ?
    template.replace(/\.[^.]+$/, `.[${hash}]$&`) :
    template;
};
