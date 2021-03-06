import Time from 'react-time';
import { connect } from 'react-redux';
import { CardText } from 'react-toolbox/lib/card';

import format from 'lib/utils/format';

import Owner from './owner';
import Playback from './playback';
import Stats from './stats';

import style from './style';

const { string, array, object } = PropTypes;

export const Content = (props) => {
  const {
    owner,
    playback,
    description,
    state,
    users,
    tracks,
    entities
  } = props;

  return (
    <CardText className={style.root}>
      <Owner user={owner} />
      {description &&
        <p className={style.description}>{format(description, 60)}</p>
      }
      {playback &&
        <Playback
          offset={playback.offset}
          track={playback.track} />
      }
      <Stats { ...{ users, tracks } } />
    </CardText>
  );
};

Content.propTypes = {
  owner: object.isRequired,
  playback: object,
  description: string,
  state: string.isRequired,
  users: array.isRequired,
  tracks: array.isRequired
};

export default Content;
