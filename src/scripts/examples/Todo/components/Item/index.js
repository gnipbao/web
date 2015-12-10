import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import listStyle from 'react-toolbox/lib/list/style';

import Icon from './Icon';
import Checkbox from './Checkbox';
import style from './style';

const { object, func, string } = PropTypes;

export default class Item extends Component {
  static propTypes = {
    item: object.isRequired,
    edit: func.isRequired,
    del: func.isRequired,
    complete: func.isRequired,
    icon: string
  }

  static defaultProps = {
    icon: 'comment'
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: props.item.text || '',
      editing: false
    };
  }

  edit(text) {
    this.props.edit(this.props.item.id, text);
    this.setState({ editing: false });
  }

  handleChange = (text) => this.setState({ text });
  handleBlur = (e) => this.edit(e.target.value);
  handleDoubleClick = () => this.setState({ editing: true });
  handleKeyPress = ({ which, target: { value } }) =>
    which === 13 && this.edit(value);

  renderNormal() {
    return (
      <Checkbox
        onDoubleClick={::this.handleDoubleClick}
        item={this.props.item}
        complete={this.props.complete}
      />
    );
  }

  renderEditing() {
    return (
      <Input
        className={style.input}
        type='text'
        onKeyPress={::this.handleKeyPress}
        onChange={::this.handleChange}
        onBlur={::this.handleBlur}
        value={this.state.text}
      />
    );
  }

  render() {
    const { item, del, icon } = this.props;
    const { editing } = this.state;
    const className = `${listStyle.item} ${style.root}`;

    return (
      <li className={className}>
        { icon ? <Icon name={icon} /> : null }
        { editing ? this.renderEditing() : this.renderNormal() }
        <Button
          onClick={() => del(item.id)}
          floating mini
          icon='delete'
        />
      </li>
    );
  }
}
