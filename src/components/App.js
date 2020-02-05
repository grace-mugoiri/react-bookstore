/* eslint-disable import/extensions */
import React from 'react';
import './App.css';

import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <div className="App-header">

        <div className="App-logo"> Bookstore CMS </div>
        <div className="subtitle-one"> BOOKS </div>
        <div className="subtitle-two"> CATEGORIES </div>
      </div>
      <div className="App-content">
        <BooksForm />
        <BooksList />
      </div>
    </div>
  );
}

export default App;
