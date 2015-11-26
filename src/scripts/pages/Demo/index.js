import { connect } from 'react-redux';
import { Link } from 'react-router';

import style from './style';

import Counter from 'examples/Counter';
import Todo from 'examples/Todo';
import FiveHundred from 'examples/500px';
import Reddit from 'examples/Reddit';
import SoundCloud from 'examples/SoundCloud';

class Demo extends Component {
  render() {
    return (
      <div className={style.root}>
        <h1>Examples</h1>
        <ul>
          <li><Link to='/examples/counter'>Count</Link></li>
          <li><Link to='/examples/todo'>Todo</Link></li>
          <li><Link to='/examples/500px'>500px</Link></li>
          <li><Link to='/examples/reddit'>Reddit</Link></li>
          <li><Link to='/examples/sound-cloud'>SoundCloud</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Demo;
