import Cell from '../Cell';
import style from './style';

export default ({ cells }) => {
  return (
    <table className={style.root}>
      <tbody>{cells.map((row, y) => (
        <tr key={y} className={style.root}>
          {row.map((alive, x) => <Cell key={x + y} {...{ y, x, alive } } />)}
        </tr>
      ))}</tbody>
    </table>
  );
};
