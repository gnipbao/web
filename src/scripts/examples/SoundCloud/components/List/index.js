import Item from '../Item';
import style from './style';

export default ({ items }) => {
  return (
    <div className={style.root}>
      {items.map((item, i) =>
        <Item key={i} {...item} />)}
    </div>
  );
};
