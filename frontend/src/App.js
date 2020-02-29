import React from 'react';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

function App() {
  return (
    <div className="App">
      <p>Generation Component</p>
      <Generation />
      <p>New Dragon Component</p>
      <Dragon />
    </div>
  );
}

export default App;
