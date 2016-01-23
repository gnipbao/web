import { autobind } from 'core-decorators';
import clamp from 'lodash/clamp';
import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';
import { spring, presets, Motion } from 'react-motion';

import style from './style';

const { bool, number, func, object, shape } = PropTypes;

@css(style)
export class Volume extends Component {
  static propTypes = {
    volume: number.isRequired,
    muted: bool.isRequired,
    onVolumeChange: func.isRequired
  };

  state = { expanded: false };

  @autobind
  handleToggle() {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
    if (expanded) document.addEventListener('mousedown', this.handleMouseDown);
  }

  @autobind
  handleBarMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  @autobind
  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (e) => this.changeVolume(e);

  @autobind
  handleMouseDown(e) {
    if (!this.state.expanded) return;

    e.stopPropagation();

    let source = e.target;
    while (source.parentNode) {
      if (source === this.root) return;
      source = source.parentNode;
    }

    document.removeEventListener('mousedown', this.handleMouseDown);
    this.setState({ expanded: false });
  };

  @autobind
  changeVolume(e) {
    const boundingRect = this.bar.getBoundingClientRect();
    const value = (e.clientY - boundingRect.top) / this.bar.offsetHeight;
    const factor = 1 - value;
    const volume = clamp(factor, 0, 1);

    this.props.onVolumeChange(volume);
  };

  @autobind
  changeVolumeToMin() {
    this.props.onVolumeChange(0);
  }

  @autobind
  changeVolumeToMax() {
    this.props.onVolumeChange(1);
  }

  render() {
    const { volume, muted } = this.props;
    const { expanded } = this.state;

    const silent = muted || volume === 0;
    const toggleIcon = silent ? 'volume_off' :
      volume > 0.5 ? 'volume_up' : 'volume_down';

    const percentage = volume * 100;
    const valueStyle = { top: (100 - percentage) + '%' };
    const animationStyle = {
      opacity: spring(expanded ? 1 : 0.01, presets.stiff)
    };

    return (
      <div styleName='volume' ref={r => this.root = r }>
        <IconButton styleName='toggle'
          neutral={false}
          icon={toggleIcon}
          onClick={this.handleToggle}
        />
        <Motion style={animationStyle}>
          {s =>
            <div className={style.container} style={s}>
              <IconButton className={style.max}
                ripple={false}
                neutral={false}
                icon='volume_up'
                onClick={this.changeVolumeToMax}
              />
              <div className={style.bar}
                ref={r => this.bar = r}
                onClick={this.changeVolume}
                onMouseDown={this.handleBarMouseDown}>
                <div className={style.value} style={valueStyle}></div>
              </div>
              <IconButton className={style.min}
                ripple={false}
                neutral={false}
                icon='volume_off'
                onClick={this.changeVolumeToMin}
              />
            </div>
          }
        </Motion>
      </div>
    );
  }
};

export default Volume;
