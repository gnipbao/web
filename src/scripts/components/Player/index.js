import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from 'react-css-modules';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import storage from 'lib/storage';

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
  state = {
    muted: this.props.muted,
    shuffle: this.props.shuffle,
    repeat: this.props.repeat,
    volume: this.props.volume,
    duration: this.props.track && this.props.track.duration || 0,
    seeking: false
  };

  componentDidMount() {
    this.audio.addEventListener('loadedmetadata', ::this.handleLoadedMetadata, false);
    this.audio.addEventListener('loadstart', ::this.handleLoadStart, false);
    this.audio.addEventListener('pause', ::this.handlePause, false);
    this.audio.addEventListener('play', ::this.handlePlay, false);
    this.audio.addEventListener('timeupdate', ::this.handleTimeUpdate, false);
    this.audio.addEventListener('volumechange', ::this.handleVolumeChange, false);
    this.audio.addEventListener('ended', ::this.handleEnded, false);

    if (this.props.track && this.props.autoPlay) {
      this.audio.play();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.track || prevProps.track !== this.props.track) {
      this.audio.play();
    }
  }

  componentWillUnmount() {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata, false);
    this.audio.removeEventListener('loadstart', this.handleLoadStart, false);
    this.audio.removeEventListener('pause', this.handlePause, false);
    this.audio.removeEventListener('play', this.handlePlay, false);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate, false);
    this.audio.removeEventListener('volumechange', this.handleVolumeChange, false);
    this.audio.removeEventListener('ended', this.handleEnded, false);
  }

  handleLoadedMetadata() {
    this.setState({ duration: Math.floor(this.audio.duration) });
  }

  handleLoadStart() {
    this.props.actions.seek(0);
    this.setState({ duration: this.props.track && this.props.track.duration || 0 });
  }

  handlePause() {
    this.props.actions.togglePlay(false);
  }

  handlePlay() {
    this.props.actions.togglePlay(true);
  }

  handleTimeUpdate() {
    if (this.state.seeking) return;

    const { actions, offset } = this.props;
    const currentTime = Math.floor(this.audio.currentTime);

    if (currentTime !== offset) {
      this.props.actions.seek(currentTime);
    }
  }

  handleVolumeChange(e) {
    if (this.state.seeking) return;

    const volume = e.currentTarget.volume;
    storage.set('volume', volume);
    this.setState({ volume });
  }

  handleEnded() {
    const { actions, repeat, shuffle } = this.state;

    if (repeat) {
      this.audio.play();
    } else if (shuffle) {
      // TODO: select trandom track & emit changeTrack action
    } else {
      // TODO: if there is a current playlist then if next track exists then
      // emit changeTrack action with its id, emit togglePlay(false) otherwise 

      action.togglePlay(false);
    }
  }

  handleKeyDown(e) {
  }

  changeTrack() {
  }

  changeVolume(e) {
  }

  togglePlay() {
    if (this.props.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  toggleMute() {
    const { muted } = !this.state.muted;

    this.audio = muted;
    this.setState({ muted });
  }

  toggleRepeat() {
    this.setState({ repeat: !this.state.repeat });
  }

  toggleShuffle() {
    this.setState({ shuffle: !this.state.shuffle });
  }

  render() {
    const { playing, offset, track, playlist } = this.props;
    const { duration, muted, repeat, shuffle, volume } = this.state;

    const timing = { offset, duration };
    const options = { repeat, shuffle };

    return (
      <div styleName='root'>
        <audio id='audio'
          ref={ref => this.audio = ref}
          src={track && track.url}>
        </audio>
        <div styleName='main'>
          <Info { ...track } />
          <Playback first last
            playing={playing}
            onTogglePlay={::this.togglePlay}
            onPrevious={() => {}}
            onNext={() => {}} />
          <SeekBar { ...timing } />
          <Time { ...timing } />
          <Options
            onToggleRepeat={::this.toggleRepeat}
            onTOggleShuffle={::this.toggleShuffle}
            { ...options } />
          <Playlist />
          <Volume muted={muted} value={volume} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  autoPlay: bool,
  muted: bool,
  shuffle: bool,
  repeat: bool,
  volume: number,

  track: shape({
    title: string,
    artist: string,
    duration: number,
    url: string
  })
};

Player.defaultProps = {
  autoPlay: true,
  muted: false,
  shuffle: false,
  repeat: false,
  volume: storage.get('volume', 1)
}

function selectActions(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(selector, selectActions)(Player);
