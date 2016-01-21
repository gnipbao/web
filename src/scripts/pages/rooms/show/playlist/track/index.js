import css from 'react-css-modules';
import { Link } from 'react-router';

import { strip } from 'lib/utils/format';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Track = (props) => {
  const {
    id, title, artist,
    isCurrent
  } = props;

  return (
    <div styleName='root'>
      <Link styleName='title' to={`/tracks/${id}`}>{strip(title)}</Link>
      <Link styleName='artist' to='http://google.com'>{strip(artist)}</Link>
    </div>
  );
};

Track.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired
};

export default css(Track, style);
