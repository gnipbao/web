import css from 'react-css-modules';
import style from './style';

const Equalizer = (props) => {
  const { playing, ...other } = props;
  const styleName = playing ? 'playing' : 'stopped';

  return (
    <div { ...{ ...other, styleName } }>
      <div styleName='bar-1'></div>
      <div styleName='bar-2'></div>
      <div styleName='bar-3'></div>
      <div styleName='bar-4'></div>
      <div styleName='bar-5'></div>
      <div styleName='bar-6'></div>
    </div>
  );
}

export default css(Equalizer, style, { allowMultiple: true });
