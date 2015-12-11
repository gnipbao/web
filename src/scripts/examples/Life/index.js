import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSS from 'react-css-modules';

const { array, object } = PropTypes;

import * as lifeActions from 'modules/examples/life';
import Grid from './components/Grid';
import Controls from './components/Controls';

import style from './style';

export const Example = ({ actions, cells }) => {
  return (
    <div styleName='root'>
      <Grid cells={cells} />
      <Controls speed={100} {...actions} />
    </div>
  );
}

Example.propTypes = {
  cells: array.isRequired,
  actions: object.isRequired
};

export default connect(
  s => ({ cells: s.life }),
  d => ({ actions: bindActionCreators(lifeActions, d) })
)(CSS(Example, style));
