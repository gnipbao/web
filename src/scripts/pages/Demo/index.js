import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CounterActions from 'actions/counter';
import Counter from 'components/Counter';

const Demo = (props) => {
  const { counter, dispatch } = props;
  const actionCreators = bindActionCreators(CounterActions, dispatch);

  return (<Counter counter={counter} {...actionCreators} />);
};

export default connect(s => ({ counter: s.counter }))(Demo);
