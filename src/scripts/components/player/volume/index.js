import clamp from 'lodash/clamp';
import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';

import style from './style';

const { bool, number, func, object, shape } = PropTypes;

@css(style)
export class Volume extends Component {
  static propTypes = {
    seeking: bool.isRequired,
    volume: number.isRequired,
    muted: bool.isRequired,
    onSeekStart: func.isRequired,
    onSeekEnd: func.isRequired,
    onVolumeChange: func.isRequired
  };

  state = { expanded: false };

  handleToggle() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  handleMouseDown(e) {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    this.props.onSeekStart();
  }

  handleMouseUp = (e) => {
    if (!this.props.seeking) return;

    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    this.props.onSeekEnd();
  };

  handleMouseMove = (e) => {
    this.changeVolume(e);
  };

  changeVolume(e) {
    const boundingRect = this.bar.getBoundingClientRect();
    const value = (e.clientY - boundingRect.top) / this.bar.offsetHeight;
    const factor = 1 - value;
    const volume = clamp(factor, 0, 1);
    this.props.onVolumeChange(volume);
  }

  render() {
    const { volume, muted, onVolumeChange } = this.props;
    const { expanded } = this.state;

    const silent = muted || volume === 0;
    const toggleIcon = silent ? 'volume_off' :
      volume > 0.5 ? 'volume_up' : 'volume_down';

    const percentage = volume * 100;
    const style = { top: (100 - percentage) + '%' };

    return (
      <div styleName='root'>
        <IconButton styleName='toggle'
          neutral={false}
          icon={toggleIcon}
          onClick={::this.handleToggle}
        />
        <div styleName={ expanded ? 'expanded' : 'collapsed' }>
          <IconButton styleName='max'
            ripple={false}
            neutral={false}
            icon='volume_up'
            onClick={() => onVolumeChange(1)}
          />
          <div styleName='bar'
            ref={r => this.bar = r}
            onClick={::this.changeVolume}
            onMouseDown={::this.handleMouseDown}>
            <div styleName='value' style={style}></div>
          </div>
          <IconButton styleName='min'
            ripple={false}
            neutral={false}
            icon='volume_off'
            onClick={() => onVolumeChange(0)}
          />
        </div>
      </div>
    );
  }
};

export default Volume;
