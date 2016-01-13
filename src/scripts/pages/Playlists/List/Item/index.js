import css from 'react-css-modules';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import { ListItem } from 'react-toolbox/lib/list';

import style from './style';
const { string, number, object } = PropTypes;

export const Item = (props) => {
  const { id, title, owner, pushPath } = props;

  return (
    <ListItem
      styleName='root'
      caption={title}
      avatar={owner.picture}
      legend={owner.firstName}
      leftIcon='queue_music'
      onClick={() => pushPath(`/playlists/${id}/tracks`)}
    />
  )
};

Item.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  owner: object.isRequired
};

function select(state, ownProps) {
  const { owner } = ownProps;
  const { entities: { users } } = state;

  return {
    owner: users[owner]
  };
}

export default connect(select, { pushPath })(css(Item, style));
