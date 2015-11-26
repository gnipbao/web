import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import 'styles/toolbox/main';
import 'styles/main';

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'components/Navigation';

@connect(s => s, { pushState })
  render() {
    return (
      <div className='main'>
        <AppBar top flat>
          <Navigation pushState={this.props.pushState} />
        </AppBar>
        <section className='page'>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Main;
