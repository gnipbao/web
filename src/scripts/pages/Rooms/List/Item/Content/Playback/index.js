import css from 'react-css-modules';
import { Link } from 'react-router';
import Typist from 'react-typist';

import format from 'lib/utils/format';
import style from './style';

const { number, object } = PropTypes;
const typistOptions = { cursor: { show: false } };

export const Playback = (props) => {
  const { track: { id, title, artist } } = props;
  const formattedTitle = format(title);
  const formattedArtist = format(artist);

  const label = `${formattedTitle} by ${formattedArtist}`;

  return (
    <Typist {...typistOptions}>
      <Link styleName='root' to={`/tracks/${id}`}>{label}</Link>
    </Typist>
  );
};

Playback.propTypes = {
  offset: number.isRequired,
  track: object.isRequired
};

export default css(Playback, style);
