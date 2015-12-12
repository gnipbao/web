export default async ({ dispatch, getState }, components, params) =>
  await* components.reduce((prev, current) => ([
    ...(current.bootloaders || []),
    ...(current.WrappedComponent && current.WrappedComponent.bootloaders || []),
    ...prev
  ]), []).map(action => dispatch(action(params, getState())));
