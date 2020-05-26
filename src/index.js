import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middlware from './middlewares/index'
import { createStore } from 'redux';


const store = createStore(reducer, middlware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
