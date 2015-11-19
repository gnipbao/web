import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import { inc, dec } from 'modules/examples/counter';

const Example = (props) => {
  const { counter, dispatch } = props;
  const creators = bindActionCreators({ inc, dec }, dispatch);
  return (<Counter counter={counter} {...creators} />);
};

export default connect(s => ({ counter: s.counter }))(Example);
