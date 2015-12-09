import { reduxForm } from 'redux-form';

import Input from 'react-toolbox/lib/input';
import Filter from './Filter';

const { object, func } = PropTypes;

const Header = (props) => {
  const { add, fields: { title } } = props;

  const handleKeyPress = (e) => {
    if (e.which !== 13) return;
    add(e.target.value.trim());
    e.target.value = '';
  };

  return (
    <div>
      <Filter />
      <Input required
        label='What needs to be done?'
        onKeyPress={handleKeyPress}
        {...title}
      />
    </div>
  );
};

Header.propTypes = {
  add: func.isRequired,
  fields: object.isRequired
};

export default reduxForm({
  form: 'todo',
  fields: ['title']
})(Header);
