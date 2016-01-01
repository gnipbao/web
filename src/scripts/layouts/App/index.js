import css from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath } from 'redux-simple-router';

import Navigation from 'components/Navigation';
import style from './style';

const { func } = PropTypes;

export class App extends Component {
  static propTypes = {
    pushPath: func.isRequired
  }

  render() {
    const { pushPath, currentPath, children } = this.props;

    return (
      <div styleName='root'>
        <Navigation {...{ pushPath, currentPath } } />
        <div styleName='main'>
          {children}
        </div>
      </div>
    );
  }
}

export default connect(
  s => ({ currentPath: s.routing.path }),
  { pushPath }
)(css(App, style));
