import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CSS from 'react-css-modules';
import SVG from 'svg-inline-react';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import { login as loginAsync } from 'modules/auth';
import { validate } from './validation';
import style from './style';

import vkontakteIcon from './icons/vkontakte';
import soundcloudIcon from './icons/soundcloud';
import facebookIcon from './icons/facebook';
import twitterIcon from './icons/twitter';
import googleIcon from './icons/google';

const { object } = PropTypes;

const TooltipButton = Tooltip(Button);
const TooltipInput = Tooltip(Input);

const buttons = [
  { name: 'vkontakte', icon: vkontakteIcon, tooltip: 'Vkontakte' },
  { name: 'soundcloud', icon: soundcloudIcon, tooltip: 'SoundCloud' },
  { name: 'facebook', icon: facebookIcon, tooltip: 'Facebook' },
  { name: 'twitter', icon: twitterIcon, tooltip: 'Twitter' },
  { name: 'google', icon: googleIcon, tooltip: 'Google+' },
];

@CSS(style)
export class SignIn extends Component {
  static propTypes = {
    fields: object.isRequired
  }

  handleLogin(provider, code) {
    this.props.login(provider, code);
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    return false;
  }

  render() {
    const { fields: { code } } = this.props;
    const valid = !code.error;

    const inputProps = {
      label: valid ? 'Welcome!' : 'Invite code',
      icon: valid ? 'thumb_up' : 'lock_outline',
      tooltip: valid ?
        'Congratulations, you did it!' :
        'You should enter your invite code here'
    };

    return (
      <div styleName='root'>
        <Helmet title='Sign in' />
        <h1 styleName='title'>party rooms</h1>
        <p styleName='desc'>share, discover, enjoy</p>
        <form styleName='form' data-valid={valid} onSubmit={::this.handleSubmit}>
          <div styleName='fields'>
            <TooltipInput required
              type='text'
              autoComplete='off'
              styleName='code'
              {...inputProps}
              {...code}
            />
          </div>
          <div styleName='social'>
            <p styleName='hint'>You can sign in now</p>
            {buttons.map(({ name, icon, tooltip }) =>
              <TooltipButton floating
                key={name}
                name='provider'
                styleName={name}
                disabled={!valid}
                value={name}
                tooltip={tooltip}
                onClick={() => this.handleLogin(name, code.value)}
                >
                <SVG src={icon} />
              </TooltipButton>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export const SignInForm = reduxForm({
  form: 'signin',
  fields: ['code'],
  touchOnBlur: false,
  touchOnChange: false,
  validate
})(SignIn);

export default connect(
  s => s.auth, {
    login: loginAsync
  }
)(SignInForm);
