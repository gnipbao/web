import { connect } from 'react-redux';
import CSS from 'react-css-modules';

import List from './components/List';
import style from './style';

export const Example = (props) => (
  <div styleName='root'>
    SoundCloud example
  </div>
);

export default connect(s => s)(CSS(Example, style));
