import Item from '../Item';
import style from './style';

export default ({ photos }) => {
  return (
    <div className={style.root}>
      {photos.map((photo, i) =>
        <Item key={i} type='image' {...photo} />)}
    </div>
  );
};
