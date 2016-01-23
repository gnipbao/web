import css from 'react-css-modules';

import style from './style';

@css(style)
class Typewriter extends Component {
  render() {
    const { text } = this.props;

    return <span>{text}</span>;
  }
}
