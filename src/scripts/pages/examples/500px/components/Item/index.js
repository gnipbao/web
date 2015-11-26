import Card from 'react-toolbox/lib/card';

import style from './style';

export default (props) => {
  const {
    photo: {
      image_url,
      name
    }
  } = props;

  return (
    <Card
      className={style.root}
      image={image_url}
      type='image'
      title={name}
    />
  );
};
