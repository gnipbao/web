import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';

import Spinner from 'components/spinners/folding_cube';
import { actions } from 'modules/rooms';
import * as selectors from 'selectors/rooms';
import fetchData from 'lib/fetchData';

import Members from './Members';
import Playlist from './Playlist';
import style from './style';

const { bool, object, func } = PropTypes;

@prefetch(fetchData('rooms', actions.fetch))
@css(style)
export class Page extends Component {
  render() {
    return (
      <section>
        <Helmet title='Room' />
        <div styleName='root'>
          {this.renderContent()}
        </div>
      </section>
    );
  }

  renderContent() {
    const { loading, data } = this.props;

    if (loading) return <Spinner />;
    if (isEmpty(data)) return null;

    const { name, tracks, users } = data;

    return (
      <div>
        <h1>{name}</h1>
        <Playlist tracks={tracks} />
        <Members users={users} />
      </div>
    );
  }
}

export default connect(selectors.show, actions)(Page);
