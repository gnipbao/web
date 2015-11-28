import { Component, PropTypes } from 'react';

const { node, func } = PropTypes;

export default class Scrollable extends Component {
  static propTypes = {
    onScroll: func.isRequired,
    children: node.isRequired
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
  }

  handleScroll = () => {
    const position = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.clientHeight;
    const offset = position + height;

    this.props.onScroll(position, height, offset);
  };

  render = () => this.props.children;
}
