import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import ProgressBar from 'react-toolbox/lib/progress_bar';
import Button from 'react-toolbox/lib/button';

import { loadPhotos } from 'modules/examples/500px';
import List from './components/List';

import style from './style';

const Example = (props) => {
  const { photos, loading, load } = props;

  return (
    <div className={style.root}>
      <Button accent floating
        loading={loading}
        icon='cached'
        onClick={() => load('nature', 1)}
      />
      { loading ?
        <ProgressBar mode='indeterminate'/> :
        <List photos={photos} /> }
    </div>
  );
};

Example.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired
};

export default connect(
  s => s.fiveHundredPixels,
  d => ({ load: bindActionCreators(loadPhotos, d) })
)(Example);
