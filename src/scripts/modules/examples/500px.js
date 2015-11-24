import { createAction, handleActions } from 'redux-actions';
import { searchPhotos } from 'api/500px';

const FHPX_REQUEST = 'FHPX_REQUEST';
const FHPX_RESPONSE = 'FHPX_RESPONSE';

const request = createAction(FHPX_REQUEST);
const response = createAction(FHPX_RESPONSE);

export const loadPhotos = (term, page) =>
  async (dispatch, getState) => {
    const requestPage = page || getState().fiveHundredPixels.page + 1;

    const requestAction = request({ term, page: requestPage });
    dispatch(requestAction);

    const { photos } = await searchPhotos(term, requestPage);

    const responseAction = response({ photos, page: requestPage });
    return dispatch(responseAction);
  };

const initialState = {
  page: 1,
  photos: [],
  loading: false
};

export default handleActions({
  FHPX_REQUEST: s => ({ ...s, photos: [], loading: true }),
  FHPX_RESPONSE: (s, { payload: { photos, page } }) => 
    ({ ...s, loading: false, photos, page })
}, initialState);
