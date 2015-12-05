import Root from 'containers/Root';
import Html from 'server/templates/Html';

export default (history, store) => {
  const root = <Root store={store} history={history} />;

  if (__CLIENT__) {
    return root;
  } else {
    const loadAssets = require('./loadAssets');
    const assets = loadAssets();
    const html = <Html store={store} assets={assets} root={root} />;
    const body = ReactDOMServer.renderToString(html);
    return `<!doctype html>\n${body}`;
  }
};
