import css from 'react-css-modules';
import { Link } from 'react-router';

import { strip } from 'lib/utils/format';
import Equalizer from 'components/equalizer';
import style from './style';

const { bool, string, object, shape } = PropTypes;

// TODO: Equalizer component is CPU consuming, replace with animation.gif

export const Info = (props) => {
  const { id, title, artist, playing } = props;

  return (
    <div styleName='root'>
      <Equalizer styleName='equalizer' playing={playing} />
      <div styleName='info'>
        <Link styleName='title' to={`/tracks/${id}`}>{strip(title)}</Link>
        <Link styleName='artist' to='http://google.com'>{strip(artist)}</Link>
      </div>
    </div>
  );
};

Info.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired
};

export default css(Info, style);
