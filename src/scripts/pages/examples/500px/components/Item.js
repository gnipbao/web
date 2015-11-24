import Card from 'react-toolbox/lib/card';

export default (props) => {
  const { photo: { image_url } } = props;
  return (
    <Card image={image_url} />
  );
};
