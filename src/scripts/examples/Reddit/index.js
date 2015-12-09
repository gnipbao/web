import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { bool, array, func } = PropTypes;

import Button from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';

import { loadPosts } from 'modules/examples/reddit';
import Feed from './components/Feed';

import style from './style';

const REDDITS = [
  { value: 'shittyprogramming', label: 'Shitty programming' },
  { value: 'financialindependence', label: 'Financial indenpendance' },
  { value: 'haskell', label: 'Haskell' },
  { value: 'programming', label: 'Programming' },
  { value: 'git', label: 'Git' },
  { value: 'compilers', label: 'Compilers' },
  { value: 'emacs', label: 'Emacs' },
  { value: 'coding', label: 'Coding' },
  { value: 'cableporn', label: 'Cable porn' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'algorithms', label: 'Algorithms' },
  { value: 'simpleliving', label: 'Simple living' },
  { value: 'vim', label: 'Vim' }
];

export class Example extends Component {
  static propTypes = {
    items: array.isRequired,
    loading: bool.isRequired,
    load: func.isRequired
  }

  state = { reddit: REDDITS[0].value }

  handleChange(value) {
    this.setState({ reddit: value });
  }

  render() {
    const { load, items, loading } = this.props;
    const { reddit } = this.state;

    return (
      <div className={style.root}>
        <Dropdown auto
          source={REDDITS}
          onChange={::this.handleChange}
          value={reddit}
        />
        <Button primary floating
          loading={loading}
          icon='cached'
          onClick={() => load(reddit)}
        />
        <Feed reddit={reddit} items={items} />
      </div>
    );
  }
}

export default connect(
  s => s.reddit,
  d => ({ load: bindActionCreators(loadPosts, d) })
)(Example);
