import serialize from 'serialize-javascript';
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

  const body = renderToString(root);
  const head = Helmet.rewind();
  const state = serialize(store.getState());

  const html = <Html state={state} assets={assets} head={head} body={body} />;
  const content = renderToString(html);

  return `<!doctype html>\n${content}`;
};
