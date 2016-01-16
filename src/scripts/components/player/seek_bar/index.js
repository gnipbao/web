import css from 'react-css-modules';

import style from './style';

const { bool, number, func, object, shape } = PropTypes;

@css(style)
export class SeekBar extends Component {
  static propTypes = {
    offset: number,
    seeking: bool.isRequired
  };

  static defaultProps = {
    offset: 0
  };

  handleMouseDown(e) {
    document.addEventListener('mousemove', ::this.handleMouseMove);
    document.addEventListener('mouseup', ::this.handleMouseUp);
    this.props.onSeekStart();
  }

  handleMouseUp(e) {
    document.removeEventListener('mousemove', ::this.handleMouseMove);
    document.removeEventListener('mouseup', ::this.handleMouseUp);
    this.props.onSeekEnd();
  }

  handleMouseMove(e) {
  }

  render() {
    const { offset, duration, onSeek } = this.props;
    const width = offset / duration * 100;

    return (
      <div styleName='root'>
        <div styleName='wrap'>
          <div styleName='seek-bar' ref={r => this.seekBar = r}>
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
