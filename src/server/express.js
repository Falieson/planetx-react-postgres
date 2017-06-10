import express from 'express';
import { Actions as FarceActions, ServerProtocol } from 'farce';
import { getStoreRenderArgs, resolver, RedirectException } from 'found';
import { RouterProvider } from 'found/lib/server';
import React from 'react';
import { Provider } from 'react-redux';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import genStore from '../redux/genStore';
import render from '../universal/SSR';
import htmlRoot from './htmlRoot';

const PORT = 3000;
const app = express();

const webpackConfig = {
  entry: [
    'babel-polyfill',
    './src/client/client',
  ],

  output: {
    path: '/',
    publicPath: '/static',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));

app.use(async (req, res) => {
  const store = genStore(new ServerProtocol(req.url));
  store.dispatch(FarceActions.init());
  const matchContext = { store };
  let renderArgs;

  try {
    renderArgs = await getStoreRenderArgs({
      store,
      matchContext,
      resolver,
    });
  } catch (e) {
    if (e instanceof RedirectException) {
      res.redirect(302, store.farce.createHref(e.location));
      return;
    }

    throw e;
  }

  res
    .status(renderArgs.error ? renderArgs.error.status : 200)
    .send(htmlRoot(
      <Provider store={store}>
        <RouterProvider router={renderArgs.router}>
          {render(renderArgs)}
        </RouterProvider>
      </Provider>,
      store.getState(),
    ));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`); // eslint-disable-line no-console
});
