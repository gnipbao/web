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
              {...code}
              styleName='code'
              label='Invite code'
              tooltip='Please, enter your invite code'
            />
          </div>
          <div styleName='social-buttons'>
            <TooltipButton href='#'
              styleName='vkontakte'
              floating
              tooltip='Vkontakte'>
              <SVG src={vkontakteIcon} />
            </TooltipButton>
            <TooltipButton href='#'
              styleName='soundcloud'
              floating
              tooltip='SoundCloud'>
              <SVG src={soundcloudIcon} />
            </TooltipButton>
            <TooltipButton href='#'
              styleName='facebook'
              floating
              tooltip='Facebook'>
              <SVG src={facebookIcon} />
            </TooltipButton>
            <TooltipButton href='#'
              styleName='twitter'
              floating tooltip='Twitter'>
              <SVG src={twitterIcon} />
            </TooltipButton>
            <TooltipButton href='#'
              styleName='google'
              floating
              tooltip='Google+'>
              <SVG src={googleIcon} />
            </TooltipButton>
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
