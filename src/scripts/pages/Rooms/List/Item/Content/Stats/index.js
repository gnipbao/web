import css from 'react-css-modules';

import style from './style';

const { object } = PropTypes;

export const Stats = (props) => {
  const { users, tracks } = props;

  return (
    <ul styleName='root'>
      <li styleName='users'>
        <span styleName='value'>{users.count}</span>
        <span styleName='label'>users</span>
      </li>
      <li styleName='tracks'>
        <span styleName='value'>{tracks.count}</span>
        <span styleName='label'>tracks</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  users: object.isRequired,
  tracks: object.isRequired
};

export default css(Stats, style);
