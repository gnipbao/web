import isEmpty from 'lodash/isEmpty';
import * as actions from 'modules/playlists/actions';

export default function(context) {
  const {
    dispatch,
    state: { playlists: { tracks } },
    params: { id }
  } = context;

  const data = tracks[id];

  if (!data || isEmpty(data.ids) && !data.loading) {
    return dispatch(actions.tracks.list(id));
  }
}
