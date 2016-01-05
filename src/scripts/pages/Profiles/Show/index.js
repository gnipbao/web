import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import css from 'react-css-modules';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import Avatar from 'react-toolbox/lib/avatar';
import Button from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import Activity from './Activity';
import Favorites from './Favorites';
import style from './style';

const { object } = PropTypes;

export class Page extends Component {
  state = { index: 1 };

  handleTabChange(index) {
    this.setState({ index });
  }

  handleActive() {
  }

  render() {
    const { picture, first_name, last_name, role, karma } = this.props.auth.data.user;
    const name = `${first_name} ${last_name}`;
    return (
      <div styleName='root'>
        <Helmet title={name} />
        <section styleName='info'>
          <Avatar styleName='avatar'
            image={picture}
            title={picture ? null : nickname || first_name}
          />
          <dl styleName='profile'>
            <dt styleName='username'>{name}</dt>
            <dt styleName='role'>{role}</dt>
          </dl>
          <ul styleName='stats'>
            <li><span styleName='value'>{karma}</span><span styleName='label'>karma</span></li>
            <li><span styleName='value'>0</span><span styleName='label'>playlists</span></li>
            <li><span styleName='value'>0</span><span styleName='label'>tracks</span></li>
          </ul>
        </section>
        <section styleName='activity'>
          <Tabs index={this.state.index} onChange={::this.handleTabChange}>
            <Tab label='Activity'><Activity /></Tab>
            <Tab label='Favorites' onActive={this.handleActive}><Favorites /></Tab>
          </Tabs>
        </section>
      </div>
    );
  }
}

export default connect(s => s)(css(Page, style));
