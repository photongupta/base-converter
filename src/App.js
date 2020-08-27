import React from 'react';
import './App.css';
import BaseConverter from './base-converter/baseConverter';

const App = function () {
  return (
    <div className="App">
      <h3>Base-Converter</h3>
      <BaseConverter lastBase={15} />
    </div>
  );
};

export default App;
