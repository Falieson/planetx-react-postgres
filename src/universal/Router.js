import React from 'react';
import Redirect from 'found/lib/Redirect';

import App from '../App';
import {
  Home,
  About,
  CounterRedux,
  CounterPostgres
} from '../pages/'

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => <Home />,
      },
      {
        path: 'about',
        Component: () => <About />,
      },
      {
        path: 'counter-redux-thunk',
        Component: () => <CounterRedux />,
      },
      {
        path: 'counter-postgres-redux',
        Component: () => <CounterPostgres />,
      },
    ],
  },
];

