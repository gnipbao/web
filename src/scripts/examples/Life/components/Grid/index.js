import Cell from '../Cell';
import style from './style';


export default ({ cells }) => {
  const tr = (row, y) => {
    return (
      <tr key={y} className={style.root}>
        {row.map((alive, x) => <Cell {...{ y, x, alive } } />)}
      </tr>
    );
  };

  return (
    <table className={style.root}>
      <tbody>{cells.map(tr)}</tbody>
    </table>
  );
};
