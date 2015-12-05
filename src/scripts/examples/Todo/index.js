import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'modules/examples/todo';

import Header from './components/Header';
import Main from './components/Main';

const Example = (props) => {
  const { items, actions } = props;
  const { add, ...mainActions } = actions;

  return (
    <div>
      <Header addItem={add} />
      <Main items={items} {...mainActions} />
    </div>
  );
};

export default connect(
  s => ({ items: s.todo }),
  d => ({ actions: bindActionCreators(actions, d) })
)(Example);
