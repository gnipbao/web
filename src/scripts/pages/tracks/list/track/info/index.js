import css from 'react-css-modules';
import { Link } from 'react-router';
import Ripple from 'react-toolbox/lib/ripple';
import FontIcon from 'react-toolbox/lib/font_icon';

import format from 'lib/utils/format';
import style from './style';

const { string, bool, number, func, shape } = PropTypes;
const maxLength = 20;

const Info = (props) => {
  const { track, current } = props;
  const { id, title, artist, picture } = track;

  const leftIcon = current ?
    'equalizer' : 'music_note';

  const formattedTitle = format(title, maxLength);
  const formattedArtist = format(artist, maxLength);

  return (
    <Link styleName={current ? 'on' : 'off'} to={`/tracks/${id}`}>
      <FontIcon value={leftIcon} />
      <div styleName='content'>
        <span styleName='title'>{formattedTitle}</span>
        <span styleName='artist'>{formattedArtist}</span>
      </div>
    </Link>
  );
};

Info.propTypes = {
  track: shape({
    id: string.isRequired,
    title: string.isRequired,
    artist: string,
    picture: string
  }).isRequired,
  current: bool
};

export default css(Info, style);
