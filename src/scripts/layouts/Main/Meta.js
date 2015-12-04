import Helmet from 'react-helmet';

const { string } = PropTypes;

const Meta = ({ title }) => (
  <Helmet
    title={title}
    titleTemplate={`%s | ${settings.name}`}
  />
);

Meta.propTypes = {
  title: string.isRequired
};

export default Meta;
