import CSS from 'react-css-modules';

import Cell from '../Cell';
import style from './style';

export const Grid = ({ cells }) => {
  return (
    <table styleName='root'>
      <tbody>{cells.map((row, y) => (
        <tr key={y} styleName='row'>
          {row.map((alive, x) => <Cell key={x + y} {...{ y, x, alive } } />)}
        </tr>
      ))}</tbody>
    </table>
  );
};

export default CSS(Grid, style);
