import css from 'react-css-modules';

import Track from './Track';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Playlist = (props) => {
  const { tracks } = props;

  return (
    <div styleName='playlist'>
      {tracks.map(track => <Item key={track.id} {...track} />)}
    </div>
  );
};

export default css(Playlist, style);
