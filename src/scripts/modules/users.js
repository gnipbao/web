import { apiAction, action, reducer } from 'lib/redux';
import * as schemas from 'api/schemas';
import * as api from 'services/users';

export const find = apiAction('users.find', service.find, schemas.user);
