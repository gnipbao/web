export default function(InnerComponent, threshold = 0) {
  return class Sticky extends Component {
    state = { sticky: false };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('touchmove', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('touchmove', this.handleScroll);
    }

    handleScroll = () => {
      if (window.scrollY >= threshold && !this.state.sticky) {
        this.setState({ sticky: true });
      } else if (window.scrollY < threshold && this.state.sticky) {
        this.setState({ sticky: false });
      }
    };

    render() {
      return <InnerComponent sticky={this.state.sticky} {...this.props} />;
    }
  }
}
