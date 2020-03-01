import React from 'react';
import { createStore } from 'redux';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const generationReducer = (state, action) => {
  console.log('generationReducer.state', state);
  console.log('generationReducer.action', action); //store.dispatch({ test: '' });

  if (action.type === 'GENERATION_ACTION_TYPE') {
    return { generation: action.generation };
  }
  return { generation: DEFAULT_GENERATION };
};

const store = createStore(generationReducer);
console.log('store', store);
console.log('store.getState()', store.getState());

store.dispatch({ type: 'test' });
store.dispatch({
  type: 'GENERATION_ACTION_TYPE',
  generation: {
    generationId: 'test1',
    expiration: 'test2',
  },
});

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
