import { load as loadProfile } from 'modules/profile';
import { load as loadUser } from 'modules/users';

export default function(context) {
  const {
    dispatch,
    params,
    state: {
      entities,
      users,
      profile
    }
  } = context;

  if (params && params.id) {
    if (!entities.users[params.id] && !users.loading) {
      return dispatch(loadUser(params.id))
    }
  }

  if (!entities.users[profile.id] && !profile.loading) {
    return dispatch(loadProfile());
  }
}
