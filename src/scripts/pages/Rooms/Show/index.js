import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import fetchData from 'lib/fetchData';
import { actions } from 'modules/rooms';
import * as selectors from 'selectors/rooms';

import style from './style';

const { bool, object, func } = PropTypes;

@prefetch(fetchData('rooms', actions.load))
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

    if (loading) return <ProgressBar />;
    if (isEmpty(data)) return null;

    const { name } = data;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default connect(selectors.show, actions)(Page);
