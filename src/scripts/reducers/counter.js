import { handleActions } from 'redux-actions';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from 'constants/counter';

export default handleActions({
  INCREMENT_COUNTER: (state, _) => state + 1,
  DECREMENT_COUNTER: (state, _) => state - 1
}, 0);
