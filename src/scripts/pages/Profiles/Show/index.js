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

import Avatar from 'components/User/Avatar';
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
    if (R.isEmpty(data)) index();
  }

  componentWillReceiveProps(nextProps) {
    const { profile: { loading } } = nextProps;

    if (loading) {
      Progress.show();
    } else {
      Progress.hide();
    }
  }

  handleTabChange(index) {
    this.setState({ index });
  }

  handleActive() {
  }

  render() {
    const { profile } = this.props;
    const { loading, error, data } = profile;

    if (loading) return null;

    const { first_name, last_name } = data;

    return (
      <section>
        <Helmet title={`${first_name} ${last_name}`} />
        <Progress.Component />
        <div styleName='root'>
          {this.renderInfo(data)}
          {this.renderTabs()}
        </div>
      </section>
    );
  }

  renderTabs() {
    return (
      <Tabs styleName='tabs'
        index={this.state.index}
        onChange={::this.handleTabChange}>

        <Tab label='Activity'><Activity /></Tab>
        <Tab label='Invites'><p>Nothing to see here...</p></Tab>
        <Tab label='Favorites' onActive={this.handleActive}><Favorites /></Tab>

      </Tabs>
    );
  }

  renderInfo(data) {
    const {
      first_name,
      last_name,
      role,
      karma,
      stats
    } = data;

    return (
      <section styleName='info'>
        <Avatar styleName='avatar' { ...data } />
        <dl styleName='profile'>
          <dt styleName='username'>{`${first_name} ${last_name}`}</dt>
          <dt styleName='role'>{role}</dt>
          <dt styleName='karma'>{karma.toFixed(2)}</dt>
        </dl>
        <Stats { ...stats } />
      </section>
    );
  }
}

export default connect(s => ({
  profile: s.profile
}), { ...actions })(Page);
