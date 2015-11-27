import Button from 'react-toolbox/lib/button';
import style from './style';

export default class Controls extends Component {
  state = { interval: null };

  play() {
    const { iterate, speed } = this.props;
    this.setState({ interval: setInterval(iterate, speed) });
  }

  stop() {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  }

  render() {
    const { iterate, clear, randomize } = this.props;
    return (
      <div className={style.root}>
        <Button mini floating primary icon='cached' onClick={randomize} />
        <Button mini floating icon='delete' onClick={clear} />
        <Button floating accent icon='skip-next' onClick={iterate} />
        <Button floating icon='play-arrow' onClick={::this.play} />
        <Button floating icon='stop' onClick={::this.stop} />
      </div>
    );
  }
}
