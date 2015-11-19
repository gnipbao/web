import React, { Component, PropTypes } from 'react';

import style from './style';

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    inc: PropTypes.func.isRequired,
    dec: PropTypes.func.isRequired
  }

  renderControls() {
    const { inc, dec } = this.props;

    return (
      <ul>
        <li><button onClick={inc}>inc</button></li>
        <li><button onClick={dec}>dec</button></li>
      </ul>
    );
  }

  render() {
    return (
      <div className={style.counter}>
        <h1>{this.props.counter}</h1>
        {this.renderControls()}
      </div>
    );
  }
}
