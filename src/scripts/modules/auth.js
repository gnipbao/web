import { createReducer as reducer } from 'redux-act';

import { asyncAction } from 'lib/redux';
import auth from 'services/auth';

export const logout => asyncAction('api.logout', _ => auth.logout());

export default reducer({
});
