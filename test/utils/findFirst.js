export default (wrapper, selector) => {
  const nodes = wrapper.find(selector);
  return nodes && nodes.first();
};
