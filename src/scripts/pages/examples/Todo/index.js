import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Undo from 'components/Undo';

import * as todoActions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

const Example = (props, context) => {
  const { items, todoActionCreators, undoActionCreators } = props;
  const { add, ...mainActionCreators } = todoActionCreators;

  return (
    <div>
      <Header addItem={add} />
      <Main items={items.present} {...mainActionCreators} />
      <Undo {...undoActionCreators} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  (d) => ({
    todoActionCreators: bindActionCreators(todoActions, d),
    undoActionCreators: bindActionCreators({
      undo: todoActions.undo,
      redo: todoActions.redo
    }, d)
  })
)(Example);
