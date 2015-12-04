import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

const { object, string, node } = PropTypes;

const Html = ({ store, assets, component }) => {
  const root = ReactDOM.renderToString(component);
  const head = Helmet.rewind();
  const state = serialize(store.getState());

  return (
    <html lang='en-us'>
      <head>
        <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />

        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='apple-touch-icon' sizes='57x57' href='/apple-touch-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-touch-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-touch-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-touch-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-touch-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-touch-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />

        <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='/android-chrome-192x192.png' sizes='192x192' />
        <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />

        <meta name='apple-mobile-web-app-title' content={settings.name} />
        <meta name='application-name' content={settings.name} />

        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />

        {assets.styles.map(href => <link href={href} rel='stylesheet' />)}
      </head>

      <body>
        <div id='root' dangerouslySetInnerHtml={{ __html: root }} />
        <script dangerouslySetInnerHtml={{ __html: `window.__state = ${state};` }} />
        {assets.scripts.map(src => <script src={src} async defer />)}
      </body>
    </html>
  );
}

Html.propTypes = {
  store: object.isRequired,
  assets: object.isRequired,
  component: node.isRequired,
};

export default Html;
