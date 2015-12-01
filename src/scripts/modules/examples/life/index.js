import { createAction, createReducer } from 'redux-act';
import { generateEmpty, generateRandom, evolve } from './grid';

export const [
  iterate,
  clear,
  randomize
] = [
  'iterate',
  'clear',
  'randomize'
].map(createAction);

const initialState = generateRandom();

export default createReducer({
  [iterate]: evolve,
  [clear]: _ => generateEmpty(),
  [randomize]: _ => generateRandom()
}, initialState);
