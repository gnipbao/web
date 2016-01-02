import css from 'react-css-modules';

import style from './style';

export const Item = (props) => {
  const { title } = props;
  return (
    <div styleName='root'>
      {title}
    </div>
  )
};

export default css(Item, style);
