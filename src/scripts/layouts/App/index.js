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
    const { children } = this.props;

    return (
      <div styleName='root'>
        <Navigation logout={::this.handleLogout} />
        <div styleName='main'>
          <Toolbar />
          <section styleName='content'>
            {children}
          </section>
        </div>
      </div>
    );
  }
}

function selectProps(state) {
  return state;
}

function selectActions() {
  return {
    replacePath,
    logout,
    resetProfile
  };
}

export default connect(
  selectProps,
  selectActions
)(css(App, style));
