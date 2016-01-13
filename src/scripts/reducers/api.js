import union from 'lodash/array/union'

// general-purpose API CRUD reducers

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
