import CSS from 'react-css-modules';
import style from './style';

export const Cell = ({ alive }) => {
  const className = classNames({ root: true, alive });
  return (<td styleName={className}></td>);
};

export default CSS(Cell, style, { allowMultiple: true });
