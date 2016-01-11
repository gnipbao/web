import css from 'react-css-modules';
import { Link } from 'react-router'

import style from './style';

const { number } = PropTypes;

export const Stats = (props) => {
  const {
    roomsCount,
    playlistsCount,
    tracksCount
  } = props;

  return (
    <ul styleName='root'>
      <li>
        <span styleName='value'>{roomsCount}</span>
        <span styleName='label'>rooms</span>
      </li>
      <li>
        <span styleName='value'>{playlistsCount}</span>
        <span styleName='label'>playlists</span>
      </li>
      <li>
        <span styleName='value'>{tracksCount}</span>
        <span styleName='label'>tracks</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  roomsCount: number.isRequired,
  playlistsCount: number.isRequired,
  tracksCount: number.isRequired
};

export default css(Stats, style);
