import CSS from 'react-css-modules';
import style from './style';

export const Item = (props) => {
  return (
    <div styleName='root'>
      item
    </div>
  );
};

export default CSS(Item, style);
