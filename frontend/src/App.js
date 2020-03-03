import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { generationReducer } from './reducers/index';
import { generationActionCreator } from './actions/generation';

const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log('store state update', store.getState()));

//########
fetch('http://localhost:3003/generation')
  .then(response => response.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation));
    console.log('####### json.generation in fetch index', json.generation);
  });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Generation Component</p>
        <Generation />
        <p>Dragon Component</p>
        <Dragon />
      </div>
    </Provider>
  );
}

export default App;
