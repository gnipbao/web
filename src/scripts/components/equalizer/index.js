import css from 'react-css-modules';
import style from './style';

const Equalizer = ({ playing }) => (
  <div styleName={ playing ? 'playing' : 'stopped' }>
    <div styleName='bar-1'></div>
    <div styleName='bar-2'></div>
    <div styleName='bar-3'></div>
    <div styleName='bar-4'></div>
    <div styleName='bar-5'></div>
    <div styleName='bar-6'></div>
  </div>
);

export default css(Equalizer, style);
