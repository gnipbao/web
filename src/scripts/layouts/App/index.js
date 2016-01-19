import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeActions } from 'redux-simple-router';

import { reset } from 'modules';
import { logout } from 'modules/auth';
import { toggle as toggleNavigation } from 'modules/navigation';

import Navigation from 'components/navigation';
import Toolbar from 'components/toolbar';
import Player from 'components/player';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    logout: func.isRequired,
    replace: func.isRequired,
    reset: func.isRequired
  };

  handleLogout() {
    this.props.logout();
    this.props.reset();
    this.props.replace('/sign-in');
  }

  render() {
    const { children, player } = this.props;

    return (
      <div styleName='root'>
        <Toolbar />
        <div styleName='main'>
          <Navigation logout={::this.handleLogout} />
          <section styleName='content'>
            {children}
          </section>
        </div>
        <Player />
      </div>
    );
  }
}

function selectProps(state) {
  return state;
}

export default connect(selectProps, {
  ...routeActions,
  logout,
  reset
})(css(App, style));
