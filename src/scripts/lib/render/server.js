import { RoutingContext } from 'react-router';
import { Provider } from 'react-redux';

import Html from 'server/templates/Html';
import { loadAssets } from 'server/utils';

const assets = loadAssets();
const { renderToString } = ReactDOMServer;

export default (store, routerProps) => {
  const root = (
    <Provider store={store}>
      <RoutingContext {...routerProps} />
    </Provider>
  );

  const props = {
    body: renderToString(root),
    head: Helmet.rewind(),
    state: store.getState(),
    assets,
  };

  const html = <Html {...props } />;
  const content = renderToString(html);

  return `<!doctype html>\n${content}`;
};
