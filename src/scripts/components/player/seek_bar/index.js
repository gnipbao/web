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

  static defaultProps = { offset: 0 };

  state = { offset: this.props.offset };

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleMouseDown(e) {
    document.documentElement.addEventListener('mousemove', this.seek);
    document.documentElement.addEventListener('mouseup', this.handleMouseUp);

    this.props.onSeekStart();
  }

  handleMouseUp = (e) => {
    if (!this.props.seeking) return;

    document.documentElement.removeEventListener('mousemove', this.seek);
    document.documentElement.removeEventListener('mouseup', this.handleMouseUp);

    this.props.onSeek(this.state.offset);
    this.props.onSeekEnd();
  };

  seek = (e) => {
    const boundingRect = this.bar.getBoundingClientRect();
    const value = (e.clientX - boundingRect.left) / this.bar.offsetWidth;
    const factor = clamp(value, 0, 1);
    const offset = Math.floor(factor * this.props.duration);

    if (!this.props.seeking) {
      this.props.onSeek(offset);
    }

    this.setState({ offset });
  };

  render() {
    const offset = this.props.seeking ?
      this.state.offset : this.props.offset;

    const factor = offset / this.props.duration;
    const width = factor * 100;

    return (
      <div styleName='root'>
        <div styleName='wrap'>
          <div styleName='bar'
            ref={r => this.bar = r}
            onClick={this.seek}>
            <div styleName='progress' style={{ width: `${width}%` }}>
              <div styleName='handle'
                onClick={::this.handleClick}
                onMouseDown={::this.handleMouseDown}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeekBar;
