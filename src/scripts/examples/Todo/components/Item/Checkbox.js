import Checkbox from 'react-toolbox/lib/checkbox';
import ListItemContent from 'react-toolbox/lib/list/content';

import style from 'react-toolbox/lib/list/style';

const Component = ({ item, complete }) => {
  const { text, completed } = item;

  return (
    <Checkbox
      className={style.checkbox}
      checked={completed}
      label={<ListItemContent caption={text} />}
      onChange={() => complete(item.id)}
    />
  );
};

Component.propTypes = {
  item: PropTypes.object.isRequired,
  complete: PropTypes.func.isRequired
};

export default Component;
