import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';
import SVG from 'svg-inline-react';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Snackbar from 'react-toolbox/lib/snackbar';

import { login } from 'modules/auth';
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
  { name: 'google', icon: googleIcon, tooltip: 'Google+', provider: 'google_oauth2' },
];

@css(style)
export class SignInPage extends Component {
  state = { showErrors: false };

  static contextTypes = {
    router: object
  };

  static propTypes = {
    fields: object.isRequired
  };

  handleLogin(provider, code) {
    this.props.login(provider, code);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    const { auth: { error, timestamp } } = nextProps;
    const showErrors = timestamp !== this.props.auth.timestamp && !!error;

    this.setState({ showErrors });
  }

  handleSnackbarTimeout() {
    this.setState({ showErrors: false });
  }

  render() {

    return (
      <div styleName='root'>
        <Helmet title='Sign in' />
        <h1 styleName='title'>party rooms</h1>
        <p styleName='desc'>share, discover, enjoy</p>
        {this.renderForm()}
        {this.state.showErrors && this.renderErrors()}
      </div>
    );
  }

  renderErrors() {
    return (
      <Snackbar
        timeout={3000}
        type='warning'
        icon='error_outline'
        active={this.state.showErrors}
        label={this.props.auth.error || ''}
        onTimeout={::this.handleSnackbarTimeout}
      />
    );
  }

  renderForm() {
    const { auth, fields: { code } } = this.props;
    const valid = !code.error;

    const inputProps = {
      label: valid ? 'Welcome!' : 'Invite code',
      icon: valid ? 'thumb_up' : (code.active ? 'lock_open' : 'lock_outline')
    };

    return (
      <form styleName='form' data-valid={valid} onSubmit={::this.handleSubmit}>
        <div styleName='fields'>
          <Input required
            {...inputProps}
            {...code}
            type='text'
            autoComplete='off'
            styleName='code'
          />
        </div>
        <div styleName='social'>
          {buttons.map(({ name, provider, icon, tooltip }) =>
            <TooltipButton floating
              key={name}
              name='provider'
              styleName={name}
              disabled={auth.loading}
              value={name}
              tooltip={tooltip}
              onClick={() => this.handleLogin(provider || name, code.value)} >
              <SVG src={icon} />
            </TooltipButton>
          )}
        </div>
      </form>
    );
  }
}

export const SignInFormPage = reduxForm({
  form: 'signin',
  fields: ['code'],
  validate
})(SignInPage);

export default connect(
  s => ({
    router: s.router,
    auth: s.auth
  }),
  { login }
)(SignInFormPage);
