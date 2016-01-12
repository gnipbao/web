import css from 'react-css-modules';
import { connect } from 'react-redux';

import { Card } from 'react-toolbox/lib/card';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import style from './style';

const { array, object, bool, func } = PropTypes;

export const Item = (props) => {
  const { id, name, rating, ...content } = props;

  return (
    <div styleName='root'>
      <Card styleName='card'>
        <Header { ...{ id, name, rating } } />
        <Content { ...content } />
        <Footer { ...{ id } } />
      </Card>
    </div>
  );
};

function select(state, ownProps) {
  const { entities: { users, tracks } } = state;
  const { owner, playback, ...props } = ownProps;

  return {
    ...props,
    owner: users[owner],
    playback: playback ? {
      ...playback,
      track: tracks[playback.track]
    } : null
  };
}

export default connect(select)(css(Item, style));
