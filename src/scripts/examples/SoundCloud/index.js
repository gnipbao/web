import { connect } from 'react-redux';

import List from './components/List';
import style from './style';

const Example = (props) => {
  return (
    <div>
      SoundCloud example
    </div>
  );
};
export default connect(s => s)(Example);
