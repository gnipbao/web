import mapObj from 'map-obj';
import { reduxForm } from 'redux-form';
import CSS from 'react-css-modules';
import SVG from 'svg-inline-react';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

import style from './style';

import vkontakteIcon from './vkontakte';
import soundcloudIcon from './soundcloud';
import facebookIcon from './facebook';
import twitterIcon from './twitter';
import googleIcon from './google';

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

  handleSubmit() {
    return false;
  }

  render() {
    const { fields: { code } } = this.props;
    return (
      <div styleName='root'>
        <Helmet title='Sign in' />
        <h1 styleName='title'>party rooms</h1>
        <p styleName='desc'>Share, discover, enjoy</p>
        <form styleName='form' onSubmit={::this.handleSubmit}>
          <div styleName='fields'>
            <TooltipInput required
              type='text'
              autoFocus
              autoComplete='off'
              styleName='code'
              label='Invite code'
              tooltip='Please, enter your invite code'
              {...code}
            />
          </div>
          <div styleName='social'>
            {buttons.map(({ name, icon, tooltip }) =>
              <TooltipButton
                key={name}
                styleName={name}
                floating
                tooltip={tooltip}>
                <SVG src={icon} />
              </TooltipButton>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['code']
})(SignIn);
