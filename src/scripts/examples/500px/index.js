import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Autocomplete from 'react-toolbox/lib/autocomplete';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Button from 'react-toolbox/lib/button';

import { loadPhotos } from 'modules/examples/500px';
import List from './components/List';

import style from './style';

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

@connect(
  s => s.fiveHundredPixels,
  d => ({ load: bindActionCreators(loadPhotos, d) })
)
export default class Example extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    load: PropTypes.func.isRequired
  };

  state = { category: 'macro' }

  handleChange(value) {
    this.setState({ category: value });
    this.props.load(value, 1);
  }

  renderControls() {
    const { category } = this.state;
    const { loading, load } = this.props;

    return (
      <div>
        <Autocomplete
          multiple={false}
          direction='down'
          name='category'
          label='Choose category'
          disabled={loading}
          onChange={::this.handleChange}
          source={CATEGORIES}
          value={category}
        />
        <Button accent floating
          loading={loading}
          icon='cached'
          onClick={() => load(category, 1)}
        />
      </div>
    );
  }

  renderPhotos() {
    const { category } = this.state;
    const { photos, load } = this.props;

    return (
      <div>
        <List photos={photos} />
        { photos.length > 0 ?
          <Button primary
            label='Next'
            icon='keyboard-arrow-right'
            onClick={() => load(category)}
          /> : null
        }
      </div>
    );
  }

  renderProgress() {
    return <ProgressBar mode='indeterminate'/>;
  }

  render() {
    const { loading } = this.props;
    return (
      <div className={style.root}>
        {this.renderControls()}
        { loading ?
          this.renderProgress() :
          this.renderPhotos()
        }
      </div>
    );
  }
}
