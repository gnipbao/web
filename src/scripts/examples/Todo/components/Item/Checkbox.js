import Checkbox from 'react-toolbox/lib/checkbox';
import { ListItemContent } from 'react-toolbox/lib/list';

import style from 'react-toolbox/lib/list/style';

const { object, func } = PropTypes;

const Component = ({ item, complete }) => {
  const { text, completed } = item;

  return (
    <Checkbox
      className={style.checkbox}
      checked={completed}
      label={text}
      onChange={() => complete(item.id)}
    />
  );
};

Component.propTypes = {
  item: object.isRequired,
  complete: func.isRequired
};

export default Component;
