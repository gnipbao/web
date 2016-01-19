import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';

import style from './style';

const { string, bool, node } = PropTypes;

@css(style)
class Playlist extends Component {
  state = {
    expanded: false
  };

  static propTypes = {
  };

  render() {
    const { expanded } = this.state;

    return (
      <div styleName='root'>
        <IconButton
          neutral={false}
          icon='list'
          accent={expanded} />
      </div>
    );
  }
}

export default Playlist;
