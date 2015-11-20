import React, { PropTypes, Component } from 'react';

import Input from 'react-toolbox/lib/input';

class Header extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }

  submit(e) {
  }

  render() {
    return (
      <Input
        required
        label='What needs to be done?'
        onKeyPress={::this.submit}
      />
    );
  }
}

export default Header;
