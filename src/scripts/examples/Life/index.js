import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { array, object } = PropTypes;

import * as lifeActions from 'modules/examples/life';
import Grid from './components/Grid';
import Controls from './components/Controls';

import style from './style';

const Example = ({ actions, cells }) => {
  return (
    <div className={style.root}>
      <Grid cells={cells} />
      <Controls {...actions} />
    </div>
  );
};

Example.propTypes = {
  cells: array.isRequired,
  actions: object.isRequired
};

export default connect(
  s => ({ cells: s.life }),
  d => ({ actions: bindActionCreators(lifeActions, d) })
)(Example);
