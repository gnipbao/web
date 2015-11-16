import Navigation from 'react-toolbox/lib/navigation';
import React, { Component } from 'react';

const buttons = (go) => [
  { label: 'Home', kind: 'raised', icon: 'access-alarm', onClick: () => go('home') },
  { label: 'Demo', kind: 'raised', icon: 'room', onClick: () => go('demo') }
];

export default (props) => {
  const { router, go } = props;
  const actions = buttons(go);

  return (
    <Navigation
      type='horizontal'
      actions={actions}
    />
  );
};
