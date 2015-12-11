import CSS from 'react-css-modules';

import Item from '../Item';
import style from './style';

const List = ({ items }) => {
  return (
    <div styleName='root'>
      {items.map((item, i) =>
        <Item key={i} {...item} />)}
    </div>
  );
};

export default CSS(List, style);
