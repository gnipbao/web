import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushPath } from 'redux-simple-router';

import Button from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';

import Navigation from 'components/Navigation';

import style from './style';

const { func } = PropTypes;

const appearance = {
  className: style.button,
  icon: 'extension'
};

const items = [
  { path: '/examples/counter', label: 'Counter', ...appearance },
  { path: '/examples/todo', label: 'Todo', ...appearance },
  { path: '/examples/500px', label: '500px', ...appearance },
  { path: '/examples/reddit', label: 'Reddit', ...appearance },
  { path: '/examples/life', label: 'Life', ...appearance },
  { path: '/examples/sound-cloud', label: 'SoundCloud', ...appearance },
];

export class Demo extends Component {
  static propTypes = {
    go: func.isRequired
  }

  state = { active: false };

  handleToggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { go, currentPath, children } = this.props;
    const { active } = this.state;

    return (
      <div className={style.root}>
        <h1>Examples</h1>
        <Button raised accent
          label='Choose'
          icon='extension'
          onClick={::this.handleToggle}
        />
        <Drawer
          active={active}
          onOverlayClick={::this.handleToggle}>
          <Navigation
            type='vertical'
            {...{ go, currentPath, items } }
          />
        </Drawer>
        {children}
      </div>
    );
  }
}

export default connect(
  s => ({ currentPath: s.routing.path }),
  d => ({ go: bindActionCreators(pushPath, d) })
)(Demo);
