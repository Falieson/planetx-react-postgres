import React from 'react';
import Redirect from 'found/lib/Redirect';

import App from '../App';
import {
  Home,
  About,
  CounterRedux,
  CounterPostgres
} from '../pages/'
import {Actions as CounterActions} from '../components/CounterPostgres'

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
        getData: ({context}) => (
          context.store.dispatch(CounterActions.fetch())
        )
      },
    ],
  },
];

