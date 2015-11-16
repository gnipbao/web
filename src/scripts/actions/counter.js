import { createAction } from 'redux-actions';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from 'constants/counter';

export const inc = createAction(INCREMENT_COUNTER);
export const dec = createAction(DECREMENT_COUNTER);
