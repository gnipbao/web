import isEmpty from 'lodash/isEmpty';
import { tracks as actions } from 'modules/playlists';

export default function(context) {
  const {
    dispatch,
    state: { playlists: { tracks } },
    params: { id }
  } = context;

  const data = tracks[id];

  if (!data || isEmpty(data.ids) && !data.loading) {
    return dispatch(actions.list(id));
  }
}
