import css from 'react-css-modules';

import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import * as actions from 'modules/player';

import style from './style';

const { bool, func, object, shape } = PropTypes;

const Player = (props) => {
  return (
    <div styleName='root'>
      <p>Don't you remember me?</p>
    </div>
  );
};

export default css(Player, style);
