import { List, ListSubHeader } from 'react-toolbox/lib/list';

import Footer from './Footer';
import Item from './Item';

export default class Main extends Component {
  static propTypes = {
    complete: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  complete() {
  }

  render() {
    const { items, complete, del } = this.props;
    const creators = { complete, del };

    return (
      <div>
        <List selectable ripple>
          <ListSubHeader caption='Todos' />
          {items.map(item =>
            <Item
              key={item.id}
              item={item}
              icon='comment'
              {...creators}
            />
          )}
        </List>
        <Footer />
      </div>
    );
  }
}
