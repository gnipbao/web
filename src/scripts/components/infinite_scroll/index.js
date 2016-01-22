import { autobind } from 'core-decorators';
import Scrollable from 'components/scrollable';

const { node, bool, number, string, func } = PropTypes;

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: node,
    load: func.isRequired,
    threshold: number,
    spinner: func,
    enabled: bool,
    loading: bool,
    className: string
  };

  static defaultProps = {
    enabled: true,
    threshold: 50
  };

  @autobind
  handleScroll(position, height, offset) {
    const { enabled, loading, threshold, load } = this.props;
    if (!enabled || loading) return;

    const remaining = this.container.offsetHeight - offset;

    if (remaining < threshold) load();
  }

  render() {
    const { loading, spinner, children, ...other } = this.props;

    return (
      <Scrollable onScroll={this.handleScroll}>
        <div ref={c => this.container = c} { ...other }>
          {children}
          {loading && spinner && spinner()}
        </div>
      </Scrollable>
    );
  }
}
