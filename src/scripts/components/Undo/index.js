import CSS from 'react-css-modules';
import Button from 'react-toolbox/lib/button';
import style from './style';

const Component = ({ undo, redo }) => {
  return (
    <div styleName='root'>
      <Button floating mini icon='undo' onClick={undo} />
      <Button floating mini icon='redo' onClick={redo} />
    </div>
  );
};

Component.propTypes = {
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired
};

export default CSS(Component, style);
