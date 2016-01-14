import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/users';

export const load = apiAction(
  'users.api.load',
  service.find,
  schemas.user,
  id => ({ id })
);

export default apiReducer({ load });
