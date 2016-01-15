import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { replacePath } from 'redux-simple-router';

import { logout } from 'modules/auth';
import { reset as resetProfile  } from 'modules/profile';
import { toggle as toggleNavigation } from 'modules/navigation';

import Navigation from 'components/navigation';
import Toolbar from 'components/toolbar';
import Player from 'components/player';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    logout: func.isRequired,
    replacePath: func.isRequired,
    resetProfile: func.isRequired
  };

  handleLogout() {
    this.props.logout();
    this.props.resetProfile();
    this.props.replacePath('/sign-in');
  }

  render() {
    const { children, player } = this.props;

    return (
      <div styleName='root'>
        <Navigation logout={::this.handleLogout} />
        <div styleName='main'>
          <Toolbar />
          <section styleName='content'>
            {children}
          </section>
          {player.track && <Player />}
        </div>
      </div>
    );
  }
}

function selectProps(state) {
  return state;
}

function selectActions(dispatch) {
  return bindActionCreators({
    replacePath,
    logout,
    resetProfile
  }, dispatch);
}

export default connect(
  selectProps,
  selectActions
)(css(App, style));
