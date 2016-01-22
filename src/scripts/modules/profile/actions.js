import { apiAction, action } from 'lib/redux';

import * as schemas from 'api/schemas';
import * as service from 'services/profile';

export const fetch = apiAction(
  'profile.api.fetch', {
    request: service.fetch,
    schema: schemas.user,
  }, id => ({ id })
);
