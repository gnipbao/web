export default function(InnerComponent, threshold = 0) {
  return class Sticky extends Component {
    state = { sticky: threshold === 0 };

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
        this.setState({ sticky: true });
      } else if (offset < threshold && this.state.sticky) {
        this.setState({ sticky: false });
      }
    };

    render() {
      return <InnerComponent sticky={this.state.sticky} {...this.props} />;
    }
  }
}
