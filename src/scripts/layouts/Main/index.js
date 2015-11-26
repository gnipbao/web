import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePath } from 'redux-simple-router';

import 'styles/toolbox/main';
import 'styles/main';

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'components/Navigation';

@connect(
  s => ({ path: s.routing.path }),
  d => ({ go: bindActionCreators(updatePath, d) })
)
export default class Main extends Component {
  static propTypes = {
    go: PropTypes.func.isRequired
  }

  render() {
    const { go, path, children } = this.props;

    return (
      <div className='main'>
        <AppBar top flat>
          <Navigation go={go} path={path} />
        </AppBar>
        <section className='page'>
          {children}
        </section>
      </div>
    );
  }
}
