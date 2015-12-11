import CSS from 'react-css-modules';
import {
  Card,
  CardTitle,
  CardText,
  CardMedia
} from 'react-toolbox/lib/card';

import style from './style';

export const Item = ({ image_url, name }) => {
  return (
    <Card styleName='root' raised>
      <CardMedia
        aspectRatio='square'
        image={image_url}
      />
      <CardTitle title={name} />
    </Card>
  );
};

export default CSS(Item, style);
