import classNames from 'classnames';

import Sym from './sym';
import style from './style';

const { string, node } = PropTypes;

export default class Counter extends Component {
  static propTypes = {
    children: node.isRequired,
    className: string
  };

  render() {
    const { children, className, ...other } = this.props;
    const value = children.toString();

    const styleName = classNames(style.root, className);

    return (
      <span className={styleName} {...other}>
        {value.split('').map((n, i) =>
          <Sym key={`${n}-${i}`} value={Number(n)} />
        )}
      </span>
    );
  }
}
