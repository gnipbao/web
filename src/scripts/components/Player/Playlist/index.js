import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';
import { spring, presets, Motion } from 'react-motion';

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
      <div styleName='playlist'>
        <IconButton
          neutral={false}
          icon='list'
          accent={expanded} />
      </div>
    );
  }
}

export default Playlist;
