import css from 'react-css-modules';
import { Link } from 'react-router'
import FontIcon from 'react-toolbox/lib/font_icon';
import TransitiveNumber from 'react-transitive-number';

import style from './style';

const { number } = PropTypes;

export const Stats = (props) => {
  const {
    roomsCount,
    playlistsCount,
    tracksCount
  } = props;

  return (
    <ul styleName='stats'>
      <li>
        <FontIcon styleName='label' value='dashboard' />
        <TransitiveNumber styleName='value'>{roomsCount}</TransitiveNumber>
      </li>
      <li>
        <FontIcon styleName='label' value='library_music' />
        <TransitiveNumber styleName='value'>{playlistsCount}</TransitiveNumber>
      </li>
      <li>
        <FontIcon styleName='label' value='music_note' />
        <TransitiveNumber styleName='value'>{tracksCount}</TransitiveNumber>
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
