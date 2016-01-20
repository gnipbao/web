import { fetch as fetchProfile } from 'modules/profile';
import { fetch as fetchUser } from 'modules/users';

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

  if (params && params.id && !entities.users[params.id] && !users.loading) {
    return dispatch(fetchUser(params.id))
  }

  if (!entities.users[profile.id] && !profile.loading) {
    return dispatch(fetchProfile());
  }
}
