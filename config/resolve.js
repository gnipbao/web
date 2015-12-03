import path from 'path';
import mapObj from 'map-obj';
import dirs from './dirs';

const resolve = path.resolve;

const base = [resolve(__dirname, '..')];
const root = (...args) => resolve.apply(resolve, [...base, ...args]);
const entries = mapObj(dirs, (k, v) => [k, root.bind(null, v)]);

export default { root, ...entries };
