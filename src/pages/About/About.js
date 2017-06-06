import React, { Component } from 'react';

import {
  Navigation
} from '../../components'

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>About Page</h2>
          <Navigation />
        </div>
        <p>
          To get started, edit <code>src/pages/About/About.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default About;