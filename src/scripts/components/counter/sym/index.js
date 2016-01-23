import css from 'react-css-modules';

import style from './style';

const { number } = PropTypes;

const isDecrementing = (prev, next) => {
};

@css(style)
export default class Sym extends Component {
  static propTypes = {
    value: number.isRequired
  };

  render() {
    const { value } = this.props;

    return (
      <span styleName='sym'>{value}</span>
    );
  }
}
