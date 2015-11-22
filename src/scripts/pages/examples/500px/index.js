import React from 'react';
import { connect } from 'react-redux'

const Example = (props) => {
  return (
    <h1>LOL</h1>
  );
};

export default connect(s => s)(Example);
