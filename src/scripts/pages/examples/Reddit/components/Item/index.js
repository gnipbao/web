import ListItem from 'react-toolbox/lib/list/item';

export default ({ title, score }) => {
  return <ListItem rightIcon='message' caption={score.toString()} legend={title} />;
};
