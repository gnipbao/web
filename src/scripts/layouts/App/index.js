import { autobind } from 'core-decorators';
import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions } from 'redux-simple-router';

import { reset } from 'modules';
import * as authActions from 'modules/auth/actions';

import NotificationSystem from 'components/notification_system';
import Navigation from 'components/navigation';
import Toolbar from 'components/toolbar';
import Player from 'components/player';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    logout: func.isRequired,
    replacePath: func.isRequired,
    reset: func.isRequired
  };

  @autobind
  handleLogout() {
    this.props.logout();
    this.props.reset();
    this.props.replacePath('/sign-in');
  }

  render() {
    const { children } = this.props;

    return (
      <div styleName='root'>
        <Toolbar />
        <div styleName='main'>
          <Navigation logout={this.handleLogout} />
          <section styleName='content'>
            {children}
          </section>
        </div>
        <NotificationSystem />
        <Player />
      </div>
    );
  }
}

function selectProps(state) {
  return state;
}

export default connect(selectProps, {
  replacePath: routeActions.replace,
  logout: authActions.logout,
  reset
})(css(App, style));
