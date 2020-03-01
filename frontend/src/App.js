import React from 'react';
import { createStore } from 'redux';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const generationReducer = () => {
  return { generation: DEFAULT_GENERATION };
};

const store = createStore(generationReducer);
console.log('store', store);
console.log('store.getState()', store.getState());

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
