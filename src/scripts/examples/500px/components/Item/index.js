import Card from 'react-toolbox/lib/card';
import style from './style';

export default ({ type, image_url, name }) => {
  return (
    <Card
      className={style.root}
      image={image_url}
      type={type}
      title={name}
    />
  );
};
