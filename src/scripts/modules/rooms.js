import { pushPath } from 'redux-simple-router';
import { apiAction, apiReducer } from 'lib/redux';

import * as reducers from 'reducers/api';
import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const list = apiAction('rooms.list', service.list, schemas.roomArray);
export const load = apiAction('rooms.load', service.find, schemas.room);
export const enter = apiAction('rooms.enter', service.enter, schemas.room);

export const enterAndRedirect = (id, userId) =>
  (dispatch, getState) => {
    dispatch(enter({ id, userId }));
    dispatch(pushPath(`/rooms/${id}`));
  };

const handlers = {
  [enter]: reducers.load
};

export default apiReducer({
  list,
  load,
  ...handlers
});
