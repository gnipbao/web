import { connect } from 'react-redux';
import css from 'react-css-modules';

import Tooltip from 'react-toolbox/lib/tooltip';
import Button from 'react-toolbox/lib/button';

import style from './style';

const { object } = PropTypes;

@css(style)
export class Page extends Component {
  render() {
    return (
      <div styleName='root'>
        <Helmet title='Show track' />
      </div>
    );
  }
}

export default connect(s => s)(Page);
