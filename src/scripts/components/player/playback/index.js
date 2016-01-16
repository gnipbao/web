import css from 'react-css-modules';
import { IconButton } from 'react-toolbox/lib/button';
import style from './style';

const { bool, func, object, shape } = PropTypes;

const Playback = (props) => {
  const {
    first, last, playing,
    onPrevious, onTogglePlay, onNext
  } = props;

  return (
    <div styleName='root'>
      <IconButton
        neutral={false}
        icon='skip_previous'
        disabled={first}
        onClick={onPrevious}
      />
      <IconButton
        neutral={false}
        icon={playing ? 'pause' : 'play_arrow'}
        onClick={onTogglePlay}
      />
      <IconButton
        neutral={false}
        icon='skip_next'
        disabled={last}
        onClick={onNext}
      />
    </div>
  );
};

Playback.propTypes = {
  first: bool.isRequired,
  last: bool.isRequired,
  playing: bool.isRequired,
  onPrevious: func.isRequired,
  onTogglePlay: func.isRequired,
  onNext: func.isRequired
};

export default css(Playback, style);
