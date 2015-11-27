import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Undo from 'components/Undo';

import * as actions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

const Example = (props) => {
  const { items, actions } = props;
  const { undo, redo, add, ...mainActions } = actions;

  return (
    <div>
      <Header addItem={add} />
      <Main items={items.present} {...mainActions} />
      <Undo {...{ undo, redo }} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  d => ({ actions: bindActionCreators(actions, d) })
)(Example);
