import css from 'react-css-modules';

import 'styles/toolbox/main';
import 'styles/main';

import Meta from './Meta';
import style from './style';

@css(style)
export default class Base extends Component {
  render() {
    const { children } = this.props;

    return (
      <div styleName='main'>
        <Meta
          og={{ title: 'partyrooms' }}
          twitter={{ site: '@yorkin', creator: '@yorkin' }}
        />
        <section styleName='page'>
          {children}
        </section>
      </div>
    );
  }
}
