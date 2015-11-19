import React, { PropTypes, Component } from 'react';
import { Tabs, Tab } from 'react-toolbox/lib/tabs';

import style from './style';
import Counter from '../examples/Counter';

class Demo extends Component {
  state = {
    index: 0
  };

  tabChange(index) {
    this.setState({ index });
  }

  render() {
    return (
      <div className={style.root}>
        <h1>Examples</h1>
        <Tabs index={this.state.index} onChange={::this.tabChange}>
          <Tab label='Counter'><Counter /></Tab>
          <Tab label='Todo' disabled></Tab>
          <Tab label='Reddit' disabled></Tab>
          <Tab label='SoundCloud' disabled></Tab>
        </Tabs>
      </div>
    );
  }
}

export default Demo;
