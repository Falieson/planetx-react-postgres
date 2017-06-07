import React from 'react';
import Redirect from 'found/lib/Redirect';

import App from './App';
import { Home, About } from './pages/'
import Counter from './components/Counter.js'

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
        path: 'counter',
        Component: () => <Counter />,
      },
    ],
  },
];

