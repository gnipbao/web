import { apiAction } from 'lib/redux';

import * as schemas from 'api/schemas';
import * as service from 'services/users';

export const fetch = apiAction(
  'users.api.fetch', {
    request: service.fetch,
    schema: schemas.user,
  }, id => ({ id })
);
