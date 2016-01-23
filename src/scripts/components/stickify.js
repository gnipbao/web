export default function(InnerComponent, threshold = 0, faux = false) {
  return class Sticky extends Component {
    state = {
      sticky: threshold === 0,
      height: 0
    };

    componentDidMount() {
      window.addEventListener('optimizedScroll', this.handleScroll);
      window.addEventListener('touchmove', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('optimizedScroll', this.handleScroll);
      window.removeEventListener('touchmove', this.handleScroll);
    }

    handleScroll = () => {
      const offset = window.pageYOffset || document.documentElement.scrollTop;

      if (offset >= threshold && !this.state.sticky) {
        const height = faux ? this.container.getBoundingClientRect().height : 0;
        this.setState({ sticky: true, height });
      } else if (offset < threshold && this.state.sticky) {
        this.setState({ sticky: false, height: 0 });
      }
    };

    render() {
      if (!faux) return <InnerComponent sticky={this.state.sticky} {...this.props} />;

      return (
        <div ref={r => this.container = r}>
          {this.state.sticky && <div style={{ height: `${this.state.height}px` }}></div>}
          <InnerComponent sticky={this.state.sticky} {...this.props} />
        </div>
      );
    }
  }
}
