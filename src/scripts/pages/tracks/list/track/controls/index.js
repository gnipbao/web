import css from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

const { string, func } = PropTypes;

import style from './style';

const Controls = (props) => {
  const {
    track, current, playing,
    togglePlayback, destroy
  } = props;

  const toggleActionName = playing && current ?  'pause' : 'play_arrow';

  return (
    <span styleName='controls'>
      <Button mini raised styleName='toggle-playback'
        neutral={false} onClick={togglePlayback}
        icon={toggleActionName} tooltip={toggleActionName} />
      <Button mini raised styleName='edit'
        neutral={false}
        icon='mode_edit' tooltip='edit track' />
      <Button mini raised styleName='destroy'
        neutral={false} onClick={() => destroy(track.id)}
        icon='delete' tooltip='delete from playlist' />
    </span>
  );
}

export default css(Controls, style);
