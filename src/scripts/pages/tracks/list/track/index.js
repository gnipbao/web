import css from 'react-css-modules';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'modules/playlists/actions';

import Info from './info';
import Controls from './controls';
import style from './style';

const { object, func } = PropTypes;

const Track = (props) => {
  const {
    player, track,
    playerActions,
    trackActions
  } = props;

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

Track.propTypes = {
  playerActions: object.isRequired,
  trackActions: object.isRequired
};

export default css(Track, style);
