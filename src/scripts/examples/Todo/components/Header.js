import { reduxForm } from 'redux-form';

import Input from 'react-toolbox/lib/input';

const { object, func } = PropTypes;

class Header extends Component {
  static propTypes = {
    addItem: func.isRequired,
    fields: object.isRequired
  }

  handleKeyPress(e) {
    if (e.which !== 13) return;

    const text = e.target.value.trim();
    this.props.addItem(text);
    e.target.value = '';
  }

  handleChange(e) {
  }

  handleBlur(e) {
  }

  render() {
    const { fields: { title } } = this.props;

    return (
      <Input required
        label='What needs to be done?'
        onKeyPress={::this.handleKeyPress}
        {...title}
      />
    );
  }
}

export default reduxForm({
  form: 'todo',
  fields: ['title']
})(Header);
