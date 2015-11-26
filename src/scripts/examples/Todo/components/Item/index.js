import Button from 'react-toolbox/lib/button';
import listStyle from 'react-toolbox/lib/list/style';

import Icon from './Icon';
import Checkbox from './Checkbox';

import style from './style';

const Component = (props) => {
  const { item, del, complete, icon } = props;
  const className = `${listStyle.item} ${style.root}`;

  return (
    <li className={className}>
      { icon ? <Icon name={icon} /> : null }
      <Checkbox item={item} complete={complete} />
      <Button
        floating mini
        icon='delete'
        onClick={() => del(item.id)}
      />
    </li>
  );
};

Component.propTypes = {
  item: PropTypes.object.isRequired,
  del: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
  icon: PropTypes.string
};

Component.defaultProps = {
  icon: 'comment'
};

export default Component;
