import CSS from 'react-css-modules'

import cardStyle from 'react-toolbox/lib/card/style';
import Button from 'react-toolbox/lib/button';

import style from './style';

@CSS(style)
export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    inc: PropTypes.func.isRequired,
    dec: PropTypes.func.isRequired
  }

  renderControls() {
    const { inc, dec } = this.props;
    return (
      <div styleName='controls'>
        <Button styleName='dec' icon='remove' primary floating mini onClick={dec} />
        <Button styleName='inc' icon='add' floating accent onClick={inc} />
      </div>
    );
  }

  render() {
    return (
      <div styleName='root'>
        <h3 styleName='title'>counter</h3>
        <h1 styleName='number'>{this.props.counter}</h1>
        {this.renderControls()}
      </div>
    );
  }
}
