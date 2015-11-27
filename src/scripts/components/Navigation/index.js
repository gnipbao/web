import Navigation from 'react-toolbox/lib/navigation';

const isActive = (current, path) => {
  return current === path ||
    path === '/examples' && current.startsWith(path);
};

export default (props) => {
  const { go, currentPath, type, items } = props;

  const actions = items.map(({ path, ...item }) => ({
    onClick: () => go(path),
    accent: isActive(currentPath, path),
    raised: true,
    ...item
  }));

  return <Navigation {...{ type, actions } } />;
};
