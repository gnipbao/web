import React, { PropTypes, Component } from 'react';
import { Tabs, Tab } from 'react-toolbox/lib/tabs';

import style from './style';

import Counter from '../examples/Counter';
import Todo from '../examples/Todo';
import FiveHundred from '../examples/500px';
import Reddit from '../examples/Reddit';
import SoundCloud from '../examples/SoundCloud';

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
          <Tab label='Todo'><Todo /></Tab>
          <Tab label='500px'><FiveHundred /></Tab>
          <Tab label='Reddit'><Reddit /></Tab>
          <Tab label='SoundCloud'><SoundCloud /></Tab>
        </Tabs>
      </div>
    );
  }
}

export default Demo;
