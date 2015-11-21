import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

const Example = (props, context) => {
  const { items, actions } = props;
  return (
    <div>
      <Header addItem={actions.add} />
      <Main items={items} {...actions} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  (d) => ({ actions: bindActionCreators(todoActions, d) })
)(Example);
