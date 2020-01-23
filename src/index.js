import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const generateID = () => parseInt(Math.random() * 100, 10);

const initialState = {
  books: [
    {
      id: generateID(),
      title: 'Dont mess with the Zohan',
      category: 'Action',
    },
    {
      id: generateID(),
      title: 'Frozen',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
