import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath, replacePath } from 'redux-simple-router';

import { logout } from 'modules/auth';
import Navigation from 'components/Navigation';
import Toolbar from 'components/Toolbar';

import style from './style';

const { func, string, object } = PropTypes;

export class App extends Component {
  static propTypes = {
    pushPath: func.isRequired,
    logout: func.isRequired,
    currentPath: string.isRequired,
    user: object.isRequired,
  }

  handleLogout() {
    this.props.logout();
    this.props.replacePath('/sign-in');
  }

  render() {
    const { user, pushPath, logout, currentPath, children } = this.props;
    return (
      <div styleName='root'>
        <Navigation
          logout={::this.handleLogout}
          { ...{ user, pushPath, currentPath } } />
        <div styleName='main'>
          <Toolbar />
          {children}
        </div>
      </div>
    );
  }
}

export default connect(
  s => ({
    user: s.auth.data.user,
    currentPath: s.routing.path
  }), {
    replacePath,
    pushPath,
    logout
  }
)(css(App, style));
