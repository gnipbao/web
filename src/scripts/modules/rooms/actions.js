import { apiAction, action } from 'lib/redux';

import * as schemas from 'api/schemas';
import * as service from 'services/rooms';

export const filter = action('rooms.filter', (filter) => ({ filter }));

export const list = apiAction(
  'rooms.api.list', {
    request: service.list,
    schema: schemas.roomArray
  }
);

export const fetch =  apiAction(
  'rooms.api.fetch', {
    request: service.fetch,
    schema: schemas.room,
  }, id => ({ id })
);

export const room = {
  enter: apiAction(
    'rooms.api.enter', {
      request: service.enter,
      schema: schemas.room
    }, (id, userId) => ({ id, userId })
  ),

  exit: apiAction(
    'rooms.api.exit', {
      request: service.exit,
      schema: schemas.room
    }, (id, userId) => ({ id, userId })
  )
};
