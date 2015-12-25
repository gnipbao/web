import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import CSS from 'react-css-modules';

import 'styles/toolbox/main';
import 'react-progress-2/main';

import style from 'styles/main';

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'components/Navigation';

import Meta from './Meta';

const { func } = PropTypes;

const items = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/sign-in', label: 'Sign in', icon: 'whatshot' }
];

export class Main extends Component {
  static propTypes = {
    pushPath: func.isRequired
  }

  render() {
    const { pushPath, currentPath, children } = this.props;

    return (
      <div styleName='main'>
        <Meta
          og={{ title: 'partyrooms' }}
          twitter={{ site: '@yorkin', creator: '@yorkin' }}
        />
        <section className={style.page}>
          {children}
        </section>
      </div>
    );
  }
}

export default connect(
  s => ({ currentPath: s.routing.path }),
  { pushPath }
)(Main);
