import css from 'react-css-modules';
import { List } from 'react-toolbox/lib/list';

import Track from './Track';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Playlist = (props) => {
  const { tracks } = props;

  return (
    <List styleName='playlist'>
      <h6 styleName='title'>Track list</h6>
      {tracks.map(track => <Track key={track.id} track={track} />)}
    </List>
  );
};

export default css(Playlist, style);
