import css from 'react-css-modules';

import style from './style';

const { array } = PropTypes;

export const Stats = (props) => {
  const { users, tracks } = props;

  return (
    <ul styleName='root'>
      <li styleName='users'>
        <span styleName='value'>{users.length}</span>
        <span styleName='label'>users</span>
      </li>
      <li styleName='tracks'>
        <span styleName='value'>{tracks.length}</span>
        <span styleName='label'>tracks</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  users: array.isRequired,
  tracks: array.isRequired
};

export default css(Stats, style);
