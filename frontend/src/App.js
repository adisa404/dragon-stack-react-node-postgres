import React from 'react';
import { createStore } from 'redux';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { generationReducer } from './reducers/index';
import { generationActionCreator } from './actions/generation';

const store = createStore(generationReducer);

store.subscribe(() => console.log('store state update', store.getState()));

//########
fetch('http://localhost:3003/generation')
  .then(response => response.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation));
  });

function App() {
  return (
    <div className="App">
      <p>Generation Component</p>
      <Generation />
      <p>Dragon Component</p>
      <Dragon />
    </div>
  );
}

export default App;
