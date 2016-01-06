import css from 'react-css-modules';

import Time from 'react-time';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

import Avatar from 'components/user/avatar';

import style from './style';

const TooltipButton = Tooltip(Button);
const { array, object, bool, func } = PropTypes;

export const Item = (props) => {
  const { name, description, state, score, rating, users, tracks, owner } = props;

  const ownerName = `${owner.first_name} ${owner.last_name}`;
  const wasDate = new Date('Thu Jul 18 2013 15:48:59 GMT+0400');

  return (
    <div styleName='root'>
      <Card styleName='card'>
        <div styleName='heading'>
          <h5 styleName='title'>{name}</h5>
          {rating && parseInt(rating) !== 0 ? <div styleName='rating'>{rating.toFixed(2)}</div> : null}
        </div>
        <CardText>
          <dl styleName='info'>
            <dd>{description}</dd>
            <dt>{ownerName}</dt><dd><Avatar { ...owner } /></dd>
          </dl>
          <dl styleName='stats'>
            <dt>users</dt><dd>{users.count}</dd>
            <dt>tracks</dt><dd>{tracks.count}</dd>
            <dt>created</dt><dd><Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative /></dd>
          </dl>
        </CardText>
        <CardActions styleName='actions'>
          <TooltipButton styleName='listen' 
            icon='play_arrow'
            tooltip='listen' />
          <TooltipButton styleName='join'
            icon='input'
            tooltip='join' />
        </CardActions>
      </Card>
    </div>
  );
};

export default css(Item, style);
