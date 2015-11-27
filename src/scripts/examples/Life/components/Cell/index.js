import classNames from 'classnames/bind';
import style from './style';

const cx = classNames.bind(style);

export default ({ alive, x }) => {
  const className = cx({ root: true, alive });
  return (<td key={x} className={className}></td>);
};
