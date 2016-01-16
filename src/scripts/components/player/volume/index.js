import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';

import style from './style';

const { bool, func, object, shape } = PropTypes;

@css(style)
export class Volume extends Component {
  state = {
    expanded: false
  };

  render() {
    const { value, muted } = this.props;

    return (
      <div styleName='root'>
        <IconButton
          neutral={false}
          icon={muted ? 'volume_off' : 'volume_up'} />
      </div>
    );
  }
};

export default Volume;
