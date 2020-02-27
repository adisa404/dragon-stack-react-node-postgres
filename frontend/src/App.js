import React from 'react';
import './App.css';
import Generation from './components/Generation';
import NewDragon from './components/NewDragon';

function App() {
  return (
    <div className="App">
      <p>Generation Component</p>
      <Generation />
      <p>New Dragon Component</p>
      <NewDragon />
    </div>
  );
}

export default App;
