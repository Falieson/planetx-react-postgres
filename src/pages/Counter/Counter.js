import React, { Component } from 'react';

import { Navigation } from '../../components'
import Counter from '../../components/Counter'

export default function Home() {
  return (
    <div>
      <div>
        <h2>Welcome to React</h2>
        <Navigation />
      </div>
      <Counter />
    </div>
  );
}
