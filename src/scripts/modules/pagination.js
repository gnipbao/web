import merge from 'lodash/object/merge';
import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  links: {},
  pageCount: 0,
  ids: []
};

function paginate(paginatedAction, mapActionToKey) {
  function update(state = initialState, { payload }) {
    const { data, error } = payload;

    if (!data) return { ...state, loading: true };
    if (error) return { ...state, loading: false };

    const { links, result } = data;

    return {
      ...state,
      loading: false,
      links,
      pageCount: state.pageCount + 1,
      ids: [
        ...state.ids,
        ...result
      ]
    };
  }

  return function(state = {}, action) {
    if (action.type !== paginatedAction.type) return state;

    const key = mapActionToKey(action);
    return merge({}, state, { [key]: update(state[key], action) });
  }
}

export default combineReducers({
});
