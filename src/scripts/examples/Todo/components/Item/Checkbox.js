import Checkbox from 'react-toolbox/lib/checkbox';
import { ListItemContent } from 'react-toolbox/lib/list';
import listStyle from 'react-toolbox/lib/list/style';

const { object, func } = PropTypes;

const Component = ({ item, complete, onDoubleClick }) => {
  const { text, completed } = item;

  return (
    <Checkbox
      className={listStyle.checkbox}
      checked={completed}
      label={<span onDoubleClick={onDoubleClick}>{text}</span>}
      onChange={() => complete(item.id)}
    />
  );
};

Component.propTypes = {
  item: object.isRequired,
  complete: func.isRequired
};

export default Component;
