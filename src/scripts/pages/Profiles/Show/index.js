import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';

import Progress from 'react-progress-2';
import { prefetch, defer } from 'react-fetcher';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

const TooltipButton = Tooltip(Button);

import * as actions from 'modules/profile';

import Avatar from 'components/user/avatar';
import Stats from './Stats';
import Activity from './Activity';
import Favorites from './Favorites';
import style from './style';

const { object } = PropTypes;

@prefetch(({ dispatch }) => dispatch(actions.index()))
@css(style)
export class Page extends Component {
  state = { index: 2 };

  componentDidMount() {
    const { index, profile: { data } } = this.props;
    if (!data) index();
    // Progress.show();
  }

  handleTabChange(index) {
    this.setState({ index });
  }

  handleActive() {
  }

  render() {
    const { profile: { data } } = this.props;
    const { first_name, last_name, role, karma, stats } = data;

    const name = `${first_name} ${last_name}`;

    return (
      <section>
        <Helmet title={name} />
        <Progress.Component />
        <div styleName='root'>
          <section styleName='info'>
            <Avatar styleName='avatar' { ...data } />
            <dl styleName='profile'>
              <dt styleName='username'>{name}</dt>
              <dt styleName='role'>{role}</dt>
            </dl>
            <Stats { ...stats } />
          </section>
          <section styleName='activity'>
            <Tabs index={this.state.index} onChange={::this.handleTabChange}>
              <Tab label='Activity'><Activity /></Tab>
              <Tab label='Invites'><p>Nothing to see here...</p></Tab>
              <Tab label='Favorites' onActive={this.handleActive}><Favorites /></Tab>
            </Tabs>
          </section>
        </div>
      </section>
    );
  }
}

export default connect(s => ({
  profile: s.profile
}), { ...actions })(Page);
