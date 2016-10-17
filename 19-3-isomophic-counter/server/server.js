import Express from 'express';
import qs from 'qs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';
import { fetchCounter } from '../common/api/counter';

const app = new Express();
const port = 3000;

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="${webpackIsomorphicTools.assets().javascript.main}"></script>
      </body>
    </html>
    `;
}

function handleRender(req, res) {
  webpackIsomorphicTools.refresh();

  fetchCounter(apiResult => {
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    const initialState = { counter };

    const store = configureStore(initialState);

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
  });
}

app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
