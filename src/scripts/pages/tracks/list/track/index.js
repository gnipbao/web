import css from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'modules/playlists/actions';

import Info from './info';
import Controls from './controls';
import style from './style';

const { object, func } = PropTypes;

@css(style)
export default class Track extends Component {
  state = { editing: false };

  static propTypes = {
    playerActions: object.isRequired,
    trackActions: object.isRequired
  };

  render() {
    const {
      player, track,
      playerActions, trackActions
    } = this.props;

    const current = track.id === player.track;

    const togglePlayback = current ?
      () => playerActions.togglePlay() :
      () => playerActions.changeTrack(track.id);

    const componentProps = {
      playing: player.playing,
      track,
      current,
      togglePlayback
    };

    return (
      <div styleName='track'>
        <Info { ...componentProps } />
        <Controls { ...{ ...componentProps, ...playerActions} } />
      </div>
    );
  }
}
