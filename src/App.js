import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  children: PropTypes.node,
};

function App({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
