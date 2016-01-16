import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import css from 'react-css-modules';
import { prefetch } from 'react-fetcher';

import { List } from 'react-toolbox/lib/list';
import Spinner from 'components/spinners/folding_cube';

import fetchData from './fetchData';
import { list as selector } from 'selectors/tracks';
import { tracks as actions } from 'modules/playlists';
import { changeTrack } from 'modules/player';

import Item from './item';
import style from './style';

const { object, bool, array, func } = PropTypes;

@prefetch(fetchData)
@css(style)
export class Page extends Component {
  static propTypes = {
    list: func.isRequired,
    params: object.isRequired,
    loading: bool,
    collection: array
  };

  render() {
    const { loading, collection, changeTrack } = this.props;

    if (loading) return <Spinner />;
    if (isEmpty(collection)) return null;

    return (
      <section>
        <Helmet title='Tracks' />
        <h1>Tracks</h1>
        <div styleName='root'>
          <List selectable ripple>
            {collection.map(item =>
              <Item key={item.id}
                onPlay={changeTrack}
                { ...item } />)
            }
          </List>
        </div>
      </section>
    );
  }
}

export default connect(selector, { ...actions, changeTrack })(Page);
