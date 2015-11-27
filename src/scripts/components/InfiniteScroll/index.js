const { node, bool, number, func } = PropTypes;
const getScrollPosition = () => window.pageYOffset;

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: node.isRequired,
    load: func.isRequired,
    distance: number,
    progress: func,
    loading: bool
  }

  static defaultProps = {
    distance: 50
  }

  componentDidMount() {
    window.addEventListener('scroll', ::this.handleScroll);
    window.addEventListener('touchmove', ::this.handleScroll);

    this.scroller = ReactDOM.findDOMNode(this.refs.scroller);
    this.props.load();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', ::this.handleScroll);
    window.removeEventListener('touchmove', ::this.handleScroll);
  }

  handleScroll() {
    const { distance, loading, load } = this.props;
    if (loading) return;

    const clientHeight = document.documentElement.clientHeight;

    const scrollPosition = getScrollPosition();
    const offset = scrollPosition + clientHeight;

    if (this.scroller.offsetHeight - offset < distance) {
      load();
    }
  }

  render() {
    const { loading, progress, children } = this.props;
    return (
      <div ref='scroller'>
        {children}
        {(loading && progress) ? progress() : null}
      </div>
    );
  }
}
