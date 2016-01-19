import pick from 'lodash/pick';
import isUndefined from 'lodash/isUndefined';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from 'react-css-modules';
import cookie from 'react-cookie';
import { spring, presets, Motion } from 'react-motion';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/player';
import selector from 'selectors/player';

import Popover from 'components/popover';
import Info from './info';
import Playback from './playback';
import SeekBar from './seek_bar';
import Time from './time';
import Options from './options';
import Playlist from './playlist';
import Volume from './volume';

import style from './style';

const {
  string, number, bool,
  func, object, shape
} = PropTypes;

@css(style)
export class Player extends Component {
  static propTypes = {
    auto: bool,
    track: shape({
      title: string,
      artist: string,
      duration: number,
      url: string
    })
  };

  static defaultProps = {
    auto: true
  };

  state = {
    muted: this.load('player.muted', false),
    shuffle: this.load('player.shuffle', false),
    repeat: this.load('player.repeat', false),
    volume: this.load('player.volume', 0.5),
    duration: this.props.track && this.props.track.duration || 0,
    seeking: false
  };

  componentDidMount() {
    this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.addEventListener('loadstart', this.handleLoadStart);
    this.audio.addEventListener('pause', this.handlePause);
    this.audio.addEventListener('play', this.handlePlay);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.addEventListener('volumechange', this.handleVolumeChange);
    this.audio.addEventListener('ended', this.handleEnded);

    this.audio.volume = this.state.volume;
    if (this.props.track && this.props.auto) {
      this.audio.play();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playing !== prevProps.playing) {
      if (this.props.playing) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }

    if (this.props.track && (!prevProps.track || prevProps.track !== this.props.track)) {
      this.audio.play();
    }
  }

  componentWillUnmount() {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata);
    this.audio.removeEventListener('loadstart', this.handleLoadStart);
    this.audio.removeEventListener('pause', this.handlePause);
    this.audio.removeEventListener('play', this.handlePlay);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate);
    this.audio.removeEventListener('volumechange', this.handleVolumeChange);
    this.audio.removeEventListener('ended', this.handleEnded);
  }

  save(key, value) {
    cookie.save(key, value, { path: '/' });
  }

  load(key, defaultValue) {
    const value = cookie.load(key);
    return isUndefined(value) ? defaultValue : value;
  }

  handleLoadedMetadata = () => this.setState({
    duration: Math.floor(this.audio.duration)
  });

  handleLoadStart = () => {
    this.props.actions.updateTime(0);
    this.setState({ duration: this.props.track && this.props.track.duration || 0 });
  };

  handlePause = () => this.props.actions.togglePlay(false);
  handlePlay = () => this.props.actions.togglePlay(true);

  handleTimeUpdate = () => {
    if (this.state.seeking) return;

    const { actions, offset } = this.props;
    const currentTime = Math.floor(this.audio.currentTime);

    if (currentTime !== offset) {
      this.props.actions.updateTime(currentTime);
    }
  };

  handleVolumeChange = (e) => {
    const volume = e.currentTarget.volume;
    this.save('player.volume', volume);
    this.setState({ volume });
  };

  handleEnded = () => {
    const { actions, repeat, shuffle } = this.state;

    if (repeat) {
      this.audio.play();
    } else if (shuffle) {
      // TODO: select trandom track & emit changeTrack action
    } else {
      // TODO: if there is a current playlist then if next track exists then
      // emit changeTrack action with its id, emit togglePlay(false) otherwise

      actions.togglePlay(false);
    }
  };

  changeVolume(volume) {
    this.audio.volume = volume;
    this.save('player.volume', volume);
    this.setState({ volume });
  }

  seek(offset) {
    this.props.actions.seek(offset);
    this.audio.currentTime = offset;
  }

  togglePlay() {
    if (this.props.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  toggleMute() {
    const muted = !this.state.muted;

    this.audio = muted;
    this.setState({ muted });
    this.save('player.muted', muted);
  }

  toggleRepeat() {
    const repeat = !this.state.repeat;
    this.setState({ repeat });
    this.save('player.repeat', repeat);
  }

  toggleShuffle() {
    const shuffle = !this.state.shuffle;
    this.setState({ shuffle });
    this.save('player.shuffle', shuffle);
  }

  handleSeekStart = () => this.setState({ seeking: true });
  handleSeekEnd = () => this.setState({ seeking: false });

  render() {
    const { playing, offset, track, playlist } = this.props;
    const { seeking, duration, muted, repeat, shuffle, volume } = this.state;

    const options = { repeat, shuffle };
    const timeable = { offset, duration };
    const seekable = {
      seeking,
      onSeekStart: this.handleSeekStart,
      onSeekEnd: this.handleSeekEnd
    };

    const animationStyle = {
      bottom: spring(track ? 0 : -51),
      opacity: spring(track ? 1 : 0.01)
    };

    return (
      <Motion style={animationStyle}>
        {s =>
          <div className={style.root} style={s}>
            {track && <Info { ...track } />}
            <Playback first last
              playing={playing}
              onTogglePlay={::this.togglePlay}
              onPrevious={() => {}}
              onNext={() => {}}
            />
            <SeekBar
              onSeek={::this.seek}
              { ...{ ...timeable, ...seekable } }
            />
            <Time { ...timeable } />
            <Options
              onToggleRepeat={::this.toggleRepeat}
              onToggleShuffle={::this.toggleShuffle}
              { ...options }
            />
            <Playlist {...playlist} />
            <Volume
              onVolumeChange={::this.changeVolume}
              { ...{ muted, volume } }
            />
            <audio id='audio'
              ref={ref => this.audio = ref}
              src={track && track.url}>
            </audio>
          </div>
        }
      </Motion>
    );
  }
}

function selectActions(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(selector, selectActions)(Player);
