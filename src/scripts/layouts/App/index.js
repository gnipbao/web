import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { replacePath } from 'redux-simple-router';

import { logout } from 'modules/auth';
import { reset as resetProfile  } from 'modules/profile';
import { toggle as toggleNavigation } from 'modules/navigation';

import Navigation from 'components/Navigation';
import Toolbar from 'components/Toolbar';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    replacePath: func.isRequired,
    logout: func.isRequired,
    resetProfile: func.isRequired
  };

  handleLogout() {
    this.props.logout();
    this.props.resetProfile();
    this.props.replacePath('/sign-in');
  }

  render() {
    const {
      auth: { data: { user } },
      routing,
      navigation,
      toggleNavigation,
      rooms,
      playlists,
      children
    } = this.props;

    const commonProps = {
      user,
      rooms,
      playlists
    };

    const navigationProps = {
      ...navigation,
      ...commonProps
    };

    const toolbarProps = {
      navigation: {
        slim: navigation.slim,
        toggle: toggleNavigation
      }
    };

    return (
      <div styleName='root'>
        <Navigation { ...navigationProps } logout={::this.handleLogout} />
        <div styleName='main'>
          <Toolbar { ...toolbarProps } />
          <section styleName='content'>
            {children}
          </section>
        </div>
      </div>
    );
  }
}

function select(state) {
  return state;
}

export default connect(select, {
  replacePath,
  logout,
  resetProfile,
  toggleNavigation
})(css(App, style));
