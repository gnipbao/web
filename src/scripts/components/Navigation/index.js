import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';

const appearance = { raised: true };

const button = (isActive, go, item) => ({
  accent: isActive(item.name),
  onClick: () => go(item.name),
  ...item,
  ...appearance
});

const items = [
  { name: 'home', label: 'Home', icon: 'home' },
  { name: 'demo', label: 'Examples', icon: 'extension' },
  { name: 'about', label: 'About', icon: 'whatshot', disabled: true }
];

export default (props) => {
  const { router, go } = props;
  const actions = items.map((item) => button(::router.isActive, go, item));

  return <Navigation type='horizontal' actions={actions} />;
};
