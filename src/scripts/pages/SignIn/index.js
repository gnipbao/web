import { reduxForm } from 'redux-form';
import CSS from 'react-css-modules';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

import style from './style';

const { object } = PropTypes;

@CSS(style)
export class SignIn extends Component {
  static propTypes = {
    fields: object.isRequired
  }

  handleSubmit() {
    return false;
  }

  render() {
    const { fields: { code } } = this.props;
    return (
      <div styleName='root'>
        <Helmet title='Sign in' />
        <form styleName='form' onSubmit={::this.handleSubmit}>
          <div styleName='fields'>
            <Input type='number'
              {...code}
              styleName='code'
              label='Invite code'
            />
          </div>
          <div styleName='social-buttons'>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'sign-up',
  fields: ['code']
})(SignIn);
