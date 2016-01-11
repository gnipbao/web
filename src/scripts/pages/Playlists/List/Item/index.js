import css from 'react-css-modules';
import { ListItem } from 'react-toolbox/lib/list';

import style from './style';

export const Item = (props) => {
  const { title } = props;
  return (
    <ListItem
      styleName='root'
      caption={title}
      avatar={props.owner.picture}
      legend={props.owner.firstName}
      leftIcon='queue_music'
    />
  )
};

export default css(Item, style);
