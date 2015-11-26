import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Undo from 'components/Undo';

import * as todoActions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

const Example = (props) => {
  const { items, todoActions, undoActions } = props;
  const { add, ...mainActions } = todoActions;

  return (
    <div>
      <Header addItem={add} />
      <Main items={items.present} {...mainActions} />
      <Undo {...undoActions} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  d => ({
    todoActions: bindActionCreators(todoActions, d),
    undoActions: bindActionCreators({
      undo: todoActions.undo,
      redo: todoActions.redo
    }, d)
  })
)(Example);
