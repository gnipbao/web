import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const list = apiAction('rooms.list', service.list, schemas.roomArray);
export const load = apiAction('rooms.load', service.find, schemas.room);

export default apiReducer({ list, load });
