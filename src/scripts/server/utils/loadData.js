const collect = (components, name = 'fetchers') => 
  components.reduce((prev, current) => ([
      ...(current[name] || []),
      ...(current.WrappedComponent && current.WrappedComponent[name] || []),
      ...prev
    ]), []);

export default async (store, renderProps) => {
  const { dispatch, getState } = store;
  const { params, components } = renderProps;

  const resolve = action =>
    typeof action === 'function' ?
      action(params, getState()) :
      action;

  return await* collect(components)
    .map(a => resolve(a))
    .map(a => dispatch(a));
}
