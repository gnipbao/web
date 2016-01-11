import Time from 'react-time';
import { CardText } from 'react-toolbox/lib/card';

const { string, array, object } = PropTypes;

import Owner from './Owner';
import Playback from './Playback';
import Stats from './Stats';

import style from './style';

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
      <Owner user={entities.users[owner]} />
      {description && <p className={style.description}>{description}</p>}
      {playback &&
        <Playback
          offset={playback.offset}
          track={entities.tracks[playback.track]} />
      }
      <Stats { ...{ users, tracks } } />
    </CardText>
  );
};

Content.propTypes = {
  owner: string.isRequired,
  playback: object,
  description: string,
  state: string.isRequired,
  users: array.isRequired,
  tracks: array.isRequired
};

export default Content;
