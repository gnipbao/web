import classNames from 'classnames/bind';
import style from './style';

const cx = classNames.bind(style);

export default ({ alive }) => {
  const className = cx({ root: true, alive });
  return (<td className={className}></td>);
};
