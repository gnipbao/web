const { string, object } = PropTypes;

const logoUrl = `${settings.webRoot}/logo.png`;
const imageSize = { width: 260, height: 260 };

const Meta = ({ og, twitter, ...props }) => {
  const {
    title = settings.name,
    description = settings.description,
  } = props;

  const meta = {
    openGraph: (og) => [
      { property: 'og:site_name', content: og.siteName || title },
      { property: 'og:title', content: og.title || title },
      { property: 'og:image', content: og.image || logoUrl },
      { property: 'og:locale', content: og.locale || settings.locale },
      { property: 'og:description', content: og.description || description },
      { property: 'og:type', content: og.type || 'website' },
    ],
    twitter: (twitter) => [
      { property: 'twitter:card', content: twitter.card || 'summary' },
      { property: 'twitter:site', content: twitter.site },
      { property: 'twitter:creator', content: twitter.creator },
      { property: 'twitter:title', content: twitter.title || title },
      { property: 'twitter:description', content: twitter.description || description },
      { property: 'twitter:image', content: twitter.image || logoUrl },
      { property: 'twitter:image:width', content: twitter.imageWidth || imageSize.width },
      { property: 'twitter:image:height', content: twitter.imageHeight || imageSize.height },
    ]
  };

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${settings.name}`}
      meta={[
        { name: 'description', content: description },
        ...(og && meta.openGraph(og) || []),
        ...(twitter && meta.twitter(twitter) || [])
      ]}
    />
  );
};

Meta.propTypes = {
  title: string,
  description: string,
  og: object,
  twitter: object,
};

export default Meta;
