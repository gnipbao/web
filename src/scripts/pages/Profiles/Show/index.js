import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import css from 'react-css-modules';

import { prefetch, defer } from 'react-fetcher';

import { Tabs, Tab } from 'react-toolbox/lib/tabs';
import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

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

  handleTabChange(index) {
    this.setState({ index });
  }

  handleActive() {
  }

  render() {
    const { profile } = this.props;
    const { loading, error, data } = profile;

    return loading ? this.renderProgress() : this.renderData(data);
  }

  renderProgress() {
    return <ProgressBar />;
  }

  renderData(data) {
    const { first_name, last_name } = data;

    return (
      <section>
        <Helmet title={`${first_name} ${last_name}`} />
        <div styleName='root'>
          {this.renderInfo(data)}
          {this.renderTabs()}
        </div>
      </section>
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
        <Avatar floating big styleName='avatar' { ...data } />
        <dl styleName='profile'>
          <dt styleName='username'>{`${first_name} ${last_name}`}</dt>
          <dt styleName='role'>{role}</dt>
          <dt styleName='karma'>{karma.toFixed(2)}</dt>
        </dl>
        <Stats { ...stats } />
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
}

export default connect(s => ({
  profile: s.profile
}), { ...actions })(Page);
