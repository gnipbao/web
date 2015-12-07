import { Card, CardTitle, CardText, CardMedia } from 'react-toolbox/lib/card';
import style from './style';

export default ({ image_url, name }) => {
  return (
    <Card className={style.root} raised>
      <CardMedia
        aspectRatio='square'
        image={image_url}
      />
      <CardTitle title={name} />
    </Card>
  );
};
