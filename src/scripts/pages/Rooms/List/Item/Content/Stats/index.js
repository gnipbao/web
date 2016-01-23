import css from 'react-css-modules';
import FontIcon from 'react-toolbox/lib/font_icon';

import TransitiveNumber from 'react-transitive-number';
import style from './style';

const { array } = PropTypes;

export const Stats = (props) => {
  const { users, tracks } = props;

  return (
    <ul styleName='root'>
      <li styleName='users'>
        <FontIcon styleName='label' value='people' />
        <TransitiveNumber styleName='value'>{users.length}</TransitiveNumber>
      </li>
      <li styleName='tracks'>
        <FontIcon styleName='label' value='music_note' />
        <TransitiveNumber styleName='value'>{tracks.length}</TransitiveNumber>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  users: array.isRequired,
  tracks: array.isRequired
};

export default css(Stats, style);
