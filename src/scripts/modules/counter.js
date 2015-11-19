import { createAction, handleActions } from 'redux-actions';

const INC = 'INC';
const DEC = 'DEC';

export const inc = createAction(INC);
export const dec = createAction(DEC);

export default handleActions({
  INC: (s, _) => s + 1,
  DEC: (s, _) => s - 1
}, 0);
