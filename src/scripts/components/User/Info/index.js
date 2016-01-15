import css from 'react-css-modules';

import Avatar from 'components/user/avatar';
import Stats from 'components/user/stats';

import style from './style';

const { object, string, number } = PropTypes;

export const Info = (props) => {
  const {
    id,
    nickname,
    firstName,
    lastName,
    picture,
    role,
    karma,
    stats
  } = props;

  const username = `${firstName} ${lastName}`;

  return (
    <section styleName='root'>
      <Avatar rounded big
        styleName='avatar'
        { ...{ id, nickname, firstName, picture } }
      />
      <dl styleName='profile'>
        <dt styleName='username'>{username}</dt>
        <dt styleName='role'>{role}</dt>
        <dt styleName='karma'>{karma.toFixed(2)}</dt>
      </dl>
      <Stats { ...stats } />
    </section>
  );
};

Info.propTypes = {
  id: string,
  nickname: string,
  firstName: string,
  lastName: string,
  picture: string,
  role: string,
  karma: number,
  stats: object
};

export default css(Info, style);
