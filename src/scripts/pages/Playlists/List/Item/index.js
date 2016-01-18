import css from 'react-css-modules';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { ListItem } from 'react-toolbox/lib/list';

import selector from './selector';
import style from './style';

const { string, number, object } = PropTypes;

export const Item = (props) => {
  const { id, title, owner, push } = props;

  return (
    <ListItem
      styleName='root'
      caption={title}
      avatar={owner.picture}
      legend={owner.firstName}
      leftIcon='queue_music'
      onClick={() => push(`/playlists/${id}/tracks`)}
    />
  )
};

Item.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  owner: object.isRequired
};

export default connect(selector, routeActions)(css(Item, style));
