import React, { Component, PropTypes } from 'react';

import cardStyle from 'react-toolbox/lib/card/style';
import Button from 'react-toolbox/lib/button';

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
      <div className={style.controls}>
        <Button icon='add' floating accent onClick={inc} />
        <Button icon='remove' floating primary onClick={dec} />
      </div>
    );
  }

  render() {
    return (
      <div className={cardStyle.root}>
        <h3 className={style.title}>counter</h3>
        <h1 className={style.number}>{this.props.counter}</h1>
        {this.renderControls()}
      </div>
    );
  }
}
