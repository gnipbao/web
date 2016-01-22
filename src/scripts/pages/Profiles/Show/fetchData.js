import * as profileActions from 'modules/profile/actions';
import * as userActions from 'modules/users/actions';

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
    return dispatch(userActions.fetch(params.id))
  }

  if (!entities.users[profile.id] && !profile.loading) {
    return dispatch(profileActions.fetch());
  }
}
