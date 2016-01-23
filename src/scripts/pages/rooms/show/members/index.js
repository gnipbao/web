import css from 'react-css-modules';

import stickify from 'components/stickify';
import Item from './Item';
import style from './style';

const { bool, string, object, number } = PropTypes;

export const Members = (props) => {
  const { users, sticky } = props;

  return (
    <aside styleName='members'>
      <div styleName={sticky ? 'sticky' : 'normal'}>
        <h6 styleName='title'>Members</h6>
        {users.map(user => <Item key={user.id} user={user} />)}
      </div>
    </aside>
  );
};

export const StyledMembers = css(Members, style);
export default stickify(StyledMembers, 120);
