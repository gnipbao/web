import React, { PropTypes, Component } from 'react';
import Input from 'react-toolbox/lib/input';

class Header extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      const text = e.target.value.trim();
      this.props.addItem(text);
    }
  }

  handleChange(e) {
  }

  handleBlur(e) {
  }

  render() {
    return (
      <Input
        required
        label='What needs to be done?'
        onKeyPress={::this.handleKeyPress}
      />
    );
  }
}

export default Header;
