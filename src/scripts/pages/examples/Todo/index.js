import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

import style from './style';

const Example = (props) => {
  const { items, actions } = props;
  return (
    <div className={style.root}>
      <Header addItem={actions.add} />
      <Main items={items} {...actions} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  { actions: todoActions },
)(Example);
