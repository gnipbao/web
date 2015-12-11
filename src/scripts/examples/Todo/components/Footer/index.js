import CSS from 'react-css-modules';
import Button from 'react-toolbox/lib/button';
import style from './style';

const { func } = PropTypes;

const Footer = ({ completeAll, clearCompleted }) => (
  <div styleName='root'>
    <Button
      onClick={completeAll} 
      raised primary
      icon='done_all'
      label='complete all'
    />
    <Button
      onClick={clearCompleted}
      raised accent
      icon='delete'
      label='clear completed'
    />
  </div>
);

Footer.propTypes = {
  completeAll: func.isRequired,
  clearCompleted: func.isRequired,
};

export default CSS(Footer, style);
