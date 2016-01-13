import { apiAction, apiReducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as service from 'services/users';

export const load = apiAction('users.load', service.find, schemas.user);

export default apiReducer({ load });