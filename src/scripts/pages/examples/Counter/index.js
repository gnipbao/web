import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Undo from 'components/Undo';

import Counter from './components/Counter';
import { inc, dec, undo, redo } from 'modules/examples/counter';

const Example = (props) => {
  const { counter, dispatch } = props;

  const counterActionCreators = bindActionCreators({ inc, dec }, dispatch);
  const undoActionCreators = bindActionCreators({ undo, redo }, dispatch);

  return (
    <div>
      <Counter
        counter={counter.present}
        {...counterActionCreators}
      />
      <Undo {...undoActionCreators} />
    </div>
  );
};

export default connect(s => ({ counter: s.counter }))(Example);
