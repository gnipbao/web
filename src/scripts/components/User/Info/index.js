import css from 'react-css-modules';

import Avatar from 'components/User/Avatar';
import Stats from 'components/User/Stats';

import style from './style';

const { object, string, number } = PropTypes;

export const Info = (props) => {
  const {
    nickname,
    first_name,
    last_name,
    picture,
    role,
    karma,
    stats
  } = props;

  const username = `${first_name} ${last_name}`;

  return (
    <section styleName='root'>
      <Avatar rounded big
        styleName='avatar'
        { ...{ nickname, first_name, picture } }
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
  nickname: string,
  first_name: string,
  last_name: string,
  picture: string,
  role: string,
  karma: number,
  stats: object
};

export default css(Info, style);
