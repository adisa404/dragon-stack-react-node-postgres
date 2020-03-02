import React from 'react';
import { createStore } from 'redux';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const GENERATION_ACTION_TYPE = 'GENERATION_ACTION_TYPE';

const generationReducer = (state, action) => {
  console.log('generationReducer.state', state);
  console.log('generationReducer.action', action); //store.dispatch({ test: '' });

  if (action.type === GENERATION_ACTION_TYPE) {
    return { generation: action.generation };
  }
  return { generation: DEFAULT_GENERATION };
};

const store = createStore(generationReducer);
console.log('store', store);
console.log('store.getState()', store.getState());

//### action creator

store.subscribe(() => console.log('store state update', store.getState()));
console.log('store', store);

store.dispatch({ type: 'test' });
store.dispatch({
  type: GENERATION_ACTION_TYPE,
  generation: {
    generationId: 'test1',
    expiration: 'test2',
  },
});

console.log('store.getState()', store.getState());

const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload,
  };
};

const exampleAction = generationActionCreator({
  generationId: 'testExample',
  expiration: 'testExampleExp',
});

store.dispatch(exampleAction);

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
