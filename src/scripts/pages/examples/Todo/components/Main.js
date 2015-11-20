import React, { PropTypes, Component } from 'react';

import { List, ListSubHeader, ListCheckbox } from 'react-toolbox/lib/list';

import Footer from './Footer'

class Main extends Component {
  complete() {
  }

  render() {
    return (
      <div>
        <List selectable ripple>
          <ListSubHeader caption='Todos' />
          <ListCheckbox
            caption='lol'
            legend='learn some shit, write some code & die'
            onChange={::this.complete}
          />
          <ListCheckbox
            caption='lol'
            legend='fsdafhkl skadlhf klhsadfkl'
            onChange={::this.complete}
          />
          <ListCheckbox
            caption='lol'
            legend='learn some shit, write some code & die'
            onChange={::this.complete}
          />
        </List>
        <Footer />
      </div>
    );
  }
}

export default Main;
