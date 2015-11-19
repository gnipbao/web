import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'redux-router5';

import 'styles/toolbox/main';
import 'styles/main';

import AppBar from 'react-toolbox/lib/app_bar';

import Page from './Page';
import Navigation from 'components/Navigation';

class Main extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  render() {
    const { dispatch } = this.props;
    const bound = bindActionCreators({
      go: actions.navigateTo
    }, dispatch);

    return (
      <div className='main'>
        <AppBar top flat>
          <Navigation
            router={this.router}
            {...bound}
          />
        </AppBar>
        <section className='page'>
          <Page />
        </section>
      </div>
    );
  }
}

export default connect(s => s)(Main);
