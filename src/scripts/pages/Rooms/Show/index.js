import isEmpty from 'lodash/lang/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch, defer } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from 'lib/fetchData';
import * as actions from 'modules/rooms';
import * as selectors from 'selectors/rooms';

import style from './style';

const { object } = PropTypes;

@prefetch(fetchData('rooms', actions.load))
@css(style)
export class Page extends Component {
  render() {
    const { loading, data } = this.props;

    if (loading) return <ProgressBar />;
    if (isEmpty(data)) return null;

    return this.renderContent(data);
  }

  renderContent(data) {
    const { name } = data;

    return (
      <section>
        <Helmet title='Room' />
        <div styleName='root'>
          <h1>Hey, its me, your room {name}</h1>
          <p>Don't you remember me?</p>
        </div>
      </section>
    );
  }
}

export default connect(selectors.show, actions)(Page);
