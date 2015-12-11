import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import Autocomplete from 'react-toolbox/lib/autocomplete';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Button from 'react-toolbox/lib/button';

import InfiniteScroll from 'components/InfiniteScroll';

import { load as loadAsync } from 'modules/examples/500px';
import List from './components/List';

import style from './style';

const { string, object, bool, array, func } = PropTypes;

const CATEGORIES = {
  'nude': 'Nude',
  'nature': 'Nature',
  'macro': 'Macro',
  'underwater': 'Underwater',
  'people': 'People',
  'street': 'Street',
  'travel': 'Travel',
  'art': 'Art',
  'fashion': 'Fashion',
  'performing': 'Performing',
  'landscapes': 'Landscapes'
};

export class Example extends Component {
  static propTypes = {
    category: string.isRequired,
    photos: array.isRequired,
    loading: bool.isRequired,
    load: func.isRequired
  };

  render() {
    const { category, photos, page, load, loading } = this.props;

    return (
      <div className={style.root}>
        <Autocomplete
          multiple={false}
          direction='down'
          name='category'
          label='Choose category'
          disabled={loading}
          onChange={v => load(v, 1)}
          source={CATEGORIES}
          value={category}
        />
        <InfiniteScroll
          loading={loading}
          spinner={_ => <ProgressBar mode='indeterminate'/>}
          load={_ => load(category, page)}>
          <List photos={photos} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default connect(
  s => s.fiveHundredPixels,
  d => ({ load: bindActionCreators(loadAsync, d)})
)(Example);
