import Navigation from 'react-toolbox/lib/navigation';

const appearance = { raised: true };

const button = (go, { path, ...props }) => ({
  accent: true, // lets take a look at react dev tools
  onClick: () => go(path),
  ...props,
  ...appearance
});

const items = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/demo', label: 'Examples', icon: 'extension' },
  { path: '/about', label: 'About', icon: 'whatshot' }
];

export default (props) => {
  const { go } = props;
  const actions = items.map((item) => button(go, item));

  return <Navigation type='horizontal' actions={actions} />;
};
