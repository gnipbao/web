import union from 'lodash/union'

export const identity = ({ id }) => id;

export const initialState = {
  loading: false,
  links: {},
  pageCount: 0,
  ids: []
};

// general-purpose CRUD reducers

export function nested(slice, selectKey = identity) {
  return (state, payload) => {
    const key = selectKey(payload);
    const nestedState = state[slice][key] || initialState;

    return {
      ...state,
      [slice]: {
        ...state[slice],
        [key]: list(nestedState, payload)
      }
    }
  };
};

export function list(state, { data, links, error }) {
  if (!data) return { ...state, loading: true };
  if (error) return { ...state, loading: false };

  return {
    ...state,
    loading: false,
    links,
    pageCount: state.pageCount + 1,
    ids: union(state.ids, data.result)
  };
}

export function load(state, { data, error }) {
  if (!data) return { ...state, loading: true };
  if (error) return { ...state, loading: false };

  return {
    ...state,
    loading: false,
    ids: union(state.ids, [data.result])
  };
}

// TODO: update, delete
