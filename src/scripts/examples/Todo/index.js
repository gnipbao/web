import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export const Example = (props) => {
  const {
    items,
    actions: {
      add,
      del,
      edit,
      complete,
      completeAll,
      clearCompleted
    }
  } = props;

  const headerActions = { add };
  const footerActions = { completeAll, clearCompleted };
  const itemActions = { del, edit, complete };

  return (
    <div>
      <Header {...headerActions} />
      <Main items={items} {...itemActions} />
      <Footer {...footerActions} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  d => ({ actions: bindActionCreators(actions, d) })
)(Example);
