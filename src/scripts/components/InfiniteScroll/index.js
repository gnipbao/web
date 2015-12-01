import Scrollable from '../Scrollable';

const { node, bool, number, func } = PropTypes;

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: node.isRequired,
    load: func.isRequired,
    threshold: number,
    spinner: func,
    loading: bool
  }

  static defaultProps = {
    threshold: 50
  }

  componentDidMount() {
    this.props.load();
  }

  handleScroll(position, height, offset) {
    if (this.props.loading) return;

    const { threshold, load } = this.props;
    const remaining = this.container.offsetHeight - offset;

    if (remaining < threshold) load();
  }

  render() {
    const { loading, spinner, children } = this.props;
    return (
      <Scrollable onScroll={::this.handleScroll}>
        <div ref={c => this.container = c}>
          {children}
          {loading && spinner && spinner()}
        </div>
      </Scrollable>
    );
  }
}
