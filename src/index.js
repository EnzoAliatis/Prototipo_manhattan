import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './sessionStorage'
import throttle from 'lodash/throttle'


const middleware = [thunk]

const persistenceState = loadState()


const store = createStore(
  reducers,
  persistenceState,
  composeWithDevTools(applyMiddleware(...middleware))
)



store.subscribe(throttle(() => {
  saveState({
    car: store.getState().car,
    products: store.getState().products,
    clientForm: store.getState().clientForm
  })
}, 1000))



render(
  <Provider store={store}>
    <App />
  </ Provider>,
  document.getElementById('root')
);
registerServiceWorker();
