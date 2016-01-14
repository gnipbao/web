import css from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

import { filters } from 'modules/rooms';

import style from './style';

export const Filter = (props) => {
  const { value, onChange } = props;

  return (
    <div styleName='root'>
      {Object.keys(filters).map(key =>
        <Button key={key}
          flat
          styleName='filter'
          label={key}
          disabled={key === value}
          onClick={() => onChange(key)}
        />
      )}
    </div>
  );
};

export default css(Filter, style);
