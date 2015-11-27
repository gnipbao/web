import { createAction, handleActions } from 'redux-actions';
import { generateEmpty, generateRandom, evolve } from './grid';

const ITERATE = 'LIFE_ITERATE';
const CLEAR = 'LIFE_CLEAR';
const RANDOMIZE = 'LIFE_RANDOMIZE';

export const iterate = createAction(ITERATE);
export const clear = createAction(CLEAR);
export const randomize = createAction(RANDOMIZE);

const initialState = generateRandom();

export default handleActions({
  [ITERATE]: s => evolve(s),
  [CLEAR]: () => generateEmpty(),
  [RANDOMIZE]: () => generateRandom()
}, initialState);
