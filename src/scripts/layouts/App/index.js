import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath, replacePath } from 'redux-simple-router';

import { logout } from 'modules/auth';
import { reset as resetProfile  } from 'modules/profile';
import { toggle as toggleNavigation } from 'modules/navigation';

import Navigation from 'components/Navigation';
import Toolbar from 'components/Toolbar';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    pushPath: func.isRequired,
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
      pushPath,
      children
    } = this.props;

    const commonProps = {
      user,
      currentPath: routing.path,
      pushPath,
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

export default connect(s => s, {
  replacePath,
  pushPath,
  logout,
  resetProfile,
  toggleNavigation
})(css(App, style));
