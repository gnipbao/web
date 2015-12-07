import { RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import Html from 'server/templates/Html';
import { loadAssets } from 'server/utils';

const assets = loadAssets();

export default async (history, store, routerProps) => {
  const root = (
    <Provider store={store}>
      <RoutingContext {...routerProps} />
    </Provider>
  );

  ReactDOMServer.renderToString(root);

  const html = <Html store={store} assets={assets} root={root} />;
  const body = ReactDOMServer.renderToString(html);

  return `<!doctype html>\n${body}`;
};
