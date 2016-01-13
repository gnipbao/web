import includes from 'lodash/collection/includes';
import css from 'react-css-modules';
import { connect } from 'react-redux';

import { Card } from 'react-toolbox/lib/card';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import style from './style';

const { array, object, bool, func } = PropTypes;

export const Item = (props) => {
  const {
    id, name, rating, inside,
    ...content
  } = props;

  return (
    <div styleName='root'>
      <Card styleName='card'>
        <Header { ...{ id, name, rating } } />
        <Content { ...content } />
        <Footer { ...{ id } } canEnter={!inside} />
      </Card>
    </div>
  );
};

Item.propTypes = {
  inside: bool.isRequired
};

function select(state, ownProps) {
  const {
    auth: { currentUserId },
    entities: { users, tracks }
  } = state;

  const {
    owner,
    playback,
    ...room
  } = ownProps;

  return {
    ...room,
    owner: users[owner],
    playback: playback ? {
      ...playback,
      track: tracks[playback.track]
    } : null,
    inside: includes(room.users, currentUserId),
  };
}

export default connect(select)(css(Item, style));
