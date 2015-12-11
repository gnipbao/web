import CSS from 'react-css-modules';

import Item from '../Item';
import style from './style';

export const List = ({ photos }) => {
  return (
    <div styleName='root'>
      {photos.map((photo, i) =>
        <Item key={i} {...photo} />)}
    </div>
  );
};

export default CSS(List, style);
