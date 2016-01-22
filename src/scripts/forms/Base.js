import { autobind } from 'core-decorators';

const { func, bool } = PropTypes;

export default class Form extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    className: string,
    valid: bool
  };

  static defaultProps = {
    className: 'form',
    valid: true
  };

  constructor(props) {
    super(props);
    this.fields = new Map();
  }

  render() {
    return (
      <form
        data-valid={this.props.valid}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        className={this.props.className}>
        {this.props.children}
      </form>
    );
  }


  @autobind
  handleChange(event) {
    const element = event.target;

    const key = element.getAttribute('name');
    const value = this.getValue(element);

    this.fields.set(key, value);
  }


  @autobind
  handleSubmit(e) {
    e.preventDefault();

    if (this.props.valid) {
      this.props.onSubmit(this.getFormData(), e);
    }
  }

  getFormData() {
    const formData = new FormData();
    [...this.fields].forEach(([k, v]) => formData.append(k, v));
    return formData;
  }

  getValue(element) {
    return this.isCheckbox(element) ? element.checked : element.value;
  }

  isCheckbox(element) {
    return element.getAttribute('type') === 'checkbox';
  }
}
