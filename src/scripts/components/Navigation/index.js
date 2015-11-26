import Navigation from 'react-toolbox/lib/navigation';

const appearance = { raised: true };

const isActive = (current, path) => {
  return current === path ||
    path === '/examples' && current.startsWith(path);
};

const button = (go, currentPath, { path, ...props }) => ({
  onClick: () => go(path),
  accent: isActive(currentPath, path),
  ...props,
  ...appearance
});

const items = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/examples', label: 'Examples', icon: 'extension' },
  { path: '/about', label: 'About', icon: 'whatshot' }
];

export default (props) => {
  const { go, path } = props;
  const actions = items.map((item) => button(go, path, item));

  return <Navigation type='horizontal' actions={actions} />;
};
