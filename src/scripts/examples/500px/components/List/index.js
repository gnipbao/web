import Item from '../Item';
import style from './style';

export default (props) => {
  const { photos } = props;
  return (
    <div className={style.root}>
      {photos.map((photo, i) =>
        <Item key={i} photo={photo} />)}
    </div>
  );
};
