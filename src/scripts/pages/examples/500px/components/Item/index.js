import Card from 'react-toolbox/lib/card';

import style from './style';

export default (props) => {
  const {
    photo: {
      image_url,
      name,
      description
    }
  } = props;

  const desc = description && description.trim();
  const text = desc ? (desc.slice(0, 128) + '...') : '';

  return (
    <Card
      className={style.root}
      image={image_url}
      type='image'
      title={name}
    />
  );
};
