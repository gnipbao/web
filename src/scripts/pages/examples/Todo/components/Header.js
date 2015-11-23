import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';

import Input from 'react-toolbox/lib/input';

class Header extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired
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
      <Input
        required
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