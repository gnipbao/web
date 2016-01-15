import css from 'react-css-modules';

import style from './style';

const { string, bool, node } = PropTypes;

@css(style)
class Playlist extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div styleName='root'>
      </div>
    )
  }
}

export default Playlist;
