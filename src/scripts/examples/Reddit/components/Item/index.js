import { ListItem } from 'react-toolbox/lib/list';

export default ({ title, score }) => {
  return <ListItem rightIcon='message' caption={score.toString()} legend={title} />;
};
