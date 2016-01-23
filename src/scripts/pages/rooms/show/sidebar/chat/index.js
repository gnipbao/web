import css from 'react-css-modules';

import style from './style';

const { bool, object, func } = PropTypes;

const Chat = (props) => { 
  return (
    <div styleName='chat'>
    </div>
  );
}

export default css(Chat, style);
