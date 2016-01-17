import clamp from 'lodash/clamp';
import css from 'react-css-modules';

import style from './style';

const { bool, number, func, object, shape } = PropTypes;

@css(style)
export class SeekBar extends Component {
  static propTypes = {
    seeking: bool.isRequired,
    offset: number,
    onSeek: func.isRequired,
    onSeekStart: func.isRequired,
    onSeekEnd: func.isRequired
  };

  static defaultProps = {
    offset: 0
  };

  state = {
    offset: this.props.offset
  };

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
    this.props.onSeek(this.state.offset);
  };

  handleMouseMove = (e) => {
    const boundingRect = this.bar.getBoundingClientRect();
    const value = (e.clientX - boundingRect.left) / this.bar.offsetWidth;
    const factor = clamp(value, 0, 1);
    const offset = Math.floor(factor * this.props.duration);
    this.setState({ offset });
  };

  render() {
    const factor = this.state.offset / this.props.duration;
    const width = factor * 100;

    return (
      <div styleName='root'>
        <div styleName='wrap'>
          <div styleName='bar'
            ref={r => this.bar = r}
            onMouseDown={::this.handleMouseDown}>
            <div styleName='progress' style={{ width: `${width}%` }}>
              <div styleName='handle'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeekBar;
