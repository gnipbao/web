import css from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

import { Filters } from 'modules/rooms';

import style from './style';

export const Filter = (props) => {
  const { value, onChange } = props;

  return (
    <div styleName='root'>
      {Object.keys(Filters).map(key =>
        <Button flat styleName='filter'
          primary={key === value}
          disabled={key === value}
          key={key}
          label={key}
          onClick={() => onChange(key)}
        />
      )}
    </div>
  );
};

export default css(Filter, style);
