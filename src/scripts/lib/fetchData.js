import isEmpty from 'lodash/lang/isEmpty';

export default function(key, action) {
  return function (locals) {
    const {
      params: { id },
      dispatch,
      state: {
        entities,
        [key]: { ids, loading }
      }
    } = locals;

    if (loading) return null;
    if (id && isEmpty(entities[key][id])) return dispatch(action(id));
    if (isEmpty(ids)) return dispatch(action());
  };
}
